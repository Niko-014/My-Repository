// let Name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let iscaptain = prompt("Is you player captain?");

// const Player = {
//   name: "Nikolozi",
//   age: "16",
//   IsCaptain: "yes",
// };
// if (Player.IsCaptain === "yes") {
//   console.log(`This player is captain!. Name: ${Player.name} and age: ${Player.age}`);
// } else {
//   console.log(
//     `This player is  regular!. Name: ${Player.name} and age: ${Player.age}`);
// }

// let game = {
//   teamA: 0,
//   teamB: 0,
// };
// function addgoal(teamname) {
//   if (teamname === "A") {
//     game.teamA++;
//   } else if (teamname === "B") {
//     game.teamB++;
//   }
//   console.log(game);
// }

// addgoal("A");
// addgoal("B");

let students = [
  { name: "Nika", score: 80 },
  { name: "Luka", score: 55 },
  { name: "Ana", score: 92 },
];

for (i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    console.log(`${students[i].name} passed`);
  } else {
    console.log(`${students[i].name} failed`);
  }
}
