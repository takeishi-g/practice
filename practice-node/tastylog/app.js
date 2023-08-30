const IS_PRODUCTION = process.env.NODE_ENV === "production";
const appconfig = require("./config/application.config");
const dbconfig = require("./config/mysql.config");
const path = require("path");
const logger = require("./lib/log/logger.js");
const accesslogger = require("./lib/log/accesslogger.js")
const applicationlogger = require("./lib/log/applicationlogger.js")
const accesscontrol = require("./lib/security/accesscontrol");
const express = require("express");
const favicon = require("serve-favicon");
const cookie = require("cookie-parser");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const flash = require("connect-flash");
const gracefulShutdown = require("http-graceful-shutdown");
const { resolve } = require("path");
const { rejects } = require("assert");
const app = express();


// Express setting
app.set("view engine", "ejs");
app.disable("x-powered-by");


app.use((req, res, next) => {
  res.locals.moment = require("moment");
  res.locals.padding = require("./lib/math/math.js").padding;
  next();
});


// Static resource
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname,"/public")));

app.use(accesslogger());



app.use(cookie());
app.use(session({
  store: new MySQLStore({
    host: dbconfig.HOST,
    port: dbconfig.PORT,
    user: dbconfig.USERNAME,
    password: dbconfig.PASSWORD,
    database: dbconfig.DATABASE
  }),
  cookie: {
    secure: IS_PRODUCTION
  },
  secret: appconfig.security.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  name: "sid"
}));

app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(...accesscontrol.initialize());





// Dynamic resource rooting
app.use("/", (() => { 
  const router = express.Router();
  router.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    next();
  });
  router.use("/account", require("./routes/account"));
  router.use("/search", require("./routes/search"));
  router.use("/shops", require("./routes/shops"));
  router.use("/", require("./routes/index"));
  return router;
})());






app.use(applicationlogger());


// Custom Erroe page
app.use((req, res, next) => {
  res.status(404);
  res.render("./404.ejs");
});
app.use((err,req, res, next) => {
  res.status(500);
  res.render("./500.ejs");
});

// Execute web application
let server = app.listen(appconfig.PORT, ()=> {
  logger.application.info(`application listening at ${appconfig.PORT}`);
});

// Graceful shutdown
gracefulShutdown(server,{
  signals: "SIGINT SIGTERM",
  timeout: 10000,
  onShutdown: () => {
    return new Promise((resolve, reject) => {
      const {pool} = require("./lib/database/pool.js");
      pool.end((err) => {
        if(err){
          return reject(err);
        }
        resolve();
      });
    });
  },
  finally: () => {
    const logger = require("./lib/log/logger.js").application;
    logger.info("Application shutdown finished.");
  }
});

