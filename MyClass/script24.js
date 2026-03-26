const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];

  const div = document.createElement("div");

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.color = "white";

  if (n % 2 === 0) {
    div.style.backgroundColor = "green";
  } else {
    div.style.backgroundColor = "red";
  }

  div.textContent = n;

  document.body.appendChild(div);
}
