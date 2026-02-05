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
