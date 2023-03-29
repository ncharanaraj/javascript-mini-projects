const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randonHexNum = "#";
  for (var i = 0; i < 6; i++) {
    randonHexNum += hex[randNum()];
  }
  document.body.style.backgroundColor = randonHexNum;
  color.textContent = randonHexNum;
});

function randNum() {
  return Math.floor(Math.random() * hex.length);
}
