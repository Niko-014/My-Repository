function validate() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorDiv = document.getElementById("error");
  errorDiv.innerHTML = "";

  let errors = [];

  if (usernameInput.value.length < 4) {
    errors.push(`<p>username-ის სიგრძე უნდა იყოს მინიმუმ 4</p>`);
    usernameInput.style.border = "2px solid red";
  } else {
    usernameInput.style.border = "2px solid green";
  }

  if (passwordInput.value.length < 6) {
    errors.push(`<p>password-ის სიგრძე უნდა იყოს მინიმუმ 6</p>`);
    passwordInput.style.border = "2px solid red";
  } else {
    passwordInput.style.border = "2px solid green";
  }

  if (errors.length) {
    errorDiv.innerHTML = errors.join("");
  } else {
    errorDiv.innerHTML = `<p>რეგისტრაცია წარმატებულია</p>`;
  }
}
