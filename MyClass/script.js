const num = prompt(" Enter Your Score");

if (num / 10 > 9) {
  console.log("You have passed succesfully");
} else if (num / 10 > 5) {
  console.log("You have passed");
} else if (num / 10 < 5) {
  console.log("You have failed");
}
