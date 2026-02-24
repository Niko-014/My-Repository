function execute() {
  const input = document.querySelector("input");
  const value = Number(input.value);

  if (isNaN(value)) {
    document.querySelector("p").innerHTML = "ეს არ არის რიცხვი";
  } else if (value >= 1 && value <= 10) {
    document.querySelector("p").innerHTML = "სწორია";
  } else {
    document.querySelector("p").innerHTML = "არ ჯდება დიაპაზონში";
  }
}
