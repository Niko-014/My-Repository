const username = ["ilo", "saba", "daviti"];
const password = ["ilo1", "saba2", "daviti3"];
let usernamee = prompt("Enter your username");
let passwordd = prompt("Enter your password");

for (let i = 0; i < username.length; i++)
  if (usernamee === username[i] && passwordd === password[i]) {
    alert("Login successful");
    break;
  } else {
    alert("Invalid username or password");
  }



  