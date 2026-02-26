document.querySelector("form").addEventListener("submit", function (e) {
  const form = document.querySelector("form").elements;

  fetch(
    form.username.value,
    form.password.value,
    form.age.value,
    form.email.value,
    form.IsMale.checked,
    form.IsFemale.checked,
  );

  e.preventDefault();
});

function fetch(userName, pass, age, email, isMale, isFemale) {
  console.log(userName + " " + pass + " " + age + " " + email);

  if (isMale) {
    console.log("Male");
  }

  if (isFemale) {
    console.log("Female");
  }
}
