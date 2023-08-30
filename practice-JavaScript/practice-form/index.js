const submit_btn = document.querySelector("#submit_btn");

const contact_name = document.querySelector('#name');
const email = document.querySelector('#email');
const body = document.querySelector('#body');

const name_error = document.querySelector('#name_error');
const email_error = document.querySelector('#email_error');
const body_error = document.querySelector('#body_error');

const email_exp = /^[A-Za-z0-9._]+@[a-z0-9.]+\.[a-z]+$/;
const body_exp = /^.{1,10}$/;

const api_url = process.env.API_URL;


submit_btn.addEventListener("click",(e) => {
  e.preventDefault();

  if (contact_name.value == "") {
    name_error.classList.remove("hidden");
  }

  if (!email_exp.test(email.value)) {
    email_error.classList.remove("hidden");
  }

  if (!body_exp.test(body.value)) {
    body_error.classList.remove("hidden");
  }

  if (name_error.classList.contains("hidden") && email_error.classList.contains("hidden") && body_error.classList.contains("hidden")) {
    fetch(api_url, {
      method: "post",
      headers: {
        "content-Type": "application/x-www-form-urlencoded"
      },
      body: encodeURI(`name=${contact_name.value}&email=${email.value}&body=${body.value}`)
    })
    .then((response) => {
      response.json().then((json) => {
        alert(json.message);
      });
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  console.log(contact_name.value);
});


contact_name.addEventListener("keyup", (e) => {
  if (contact_name.value == "") {
    name_error.classList.remove("hidden");
  } else {
    name_error.classList.add("hidden");
  }
});

email.addEventListener("keyup", (e) => {
  if (!email_exp.test(email.value)) {
    email_error.classList.remove('hidden');
  } else {
    email_error.classList.add("hidden");
  }
});

body.addEventListener("keyup", (e) => {
  if (!body_exp.test(body.value)) {
    body_error.classList.remove("hidden");
  } else {
    body_error.classList.add("hidden");
  }
});
