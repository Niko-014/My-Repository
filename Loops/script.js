let number = prompt("Guess the number");

while (number == 14) {
  number = prompt("You have found the number");
}

if (number > 14) {
  number = prompt("Lower");
}
if (number < 14) {
  number = prompt("Higher");
}
let guess = Number(prompt("Guess the number"));
const number = 14;

while (guess !== number) {
  if (guess > number) {
    alert("Lower");
  } else {
    alert("Higher");
  }

  guess = Number(prompt("Try again"));
}

alert("You have guessed ");
