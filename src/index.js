import "./styles.css";

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const addText = document.getElementById("addText");
  const inputText = addText.value;
  addText.value = "";

  const li = document.createElement("li");
});

console.log();
