var form = $("#signup");

  form.disableValidation = true;
$(document).ready(function() {
  event.preventDefault();
  $("#signup").validate({
    rules: {
      name: "required",    // simple rule, converted to {required: true}
      email: {             // compound rule
      required: true,
      email: true
      },
      username: "required"
    },
    messages: {
      comment: "Please enter a comment."
    }
  });
});
