function calculate() {
  let name = document.getElementById("name").value;
  let math = document.getElementById("math").value;
  let english = document.getElementById("english").value;

  if (name === "" || math === "" || english === "") {
    document.getElementById("result").innerText = "something is wrong";
    return;
  }

  let average = (Number(math) + Number(english)) / 2;

  document.getElementById("result").innerText =
    name + "'s average score is " + average;
}
