const numbers = [26, 34, 67, 12, 69];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[0] < numbers[i - 1]) {
    console.log(i++);
  }
}
