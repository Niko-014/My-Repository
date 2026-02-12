const numbers1 = [4, 4, 6, 9, 12, 15];
const numbers2 = [2, 5, 7, 11, 14, 18];

function counteven(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(counteven(numbers1));
console.log(counteven(numbers2));
