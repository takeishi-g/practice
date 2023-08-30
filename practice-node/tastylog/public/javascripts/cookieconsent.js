(function() {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#eaf7f7",
        "text": "#5c7291"
      },
      "button": {
        "background": "#56cbdb",
        "text": "#ffffff"
      }
    },
    "showLink": false,
    "theme": "classic",
    "position": "bottom-left",
    "type": "opt-in",
    "content": {
      "message": "当社では、本サイトでの体験を向上させ、コンテンツや広告のパーソナライズ、トラフィック分析のため、Cookieを利用します。",
      "deny": "全て拒否",
      "allow": "すべて許可",
      "link": "プライバシーポリシー",
      "href": "/public/help/privacy-policy.html"
    },
    "onstatusChange": function(status, chosenBefore){
      if(this.hasConsented()){
        console.log("ALLOW");
      }else{
        console.log("DENY");
      } 
    }
  });
})();