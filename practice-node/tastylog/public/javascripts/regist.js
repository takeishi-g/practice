const btnSubmit_onClick = function(event) {
  let $submit = $(this);
  let $form = $submit.parents("form");
  $form.attr("method", $submit.data("method"));
  $form.attr("action", $submit.data("action"));
  $form.submit();
  $submit.off().prop("disabled", true);
  $form.on("submit", false);
};

let document_onready = (event) => {
  $("input[type= 'submit']").on("click", btnSubmit_onClick);
};

$(document).ready(document_onready);