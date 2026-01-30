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
