import "./styles.css";

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  const addText = document.getElementById("addText");
  const inputText = addText.value;
  addText.value = "";

  const li = document.createElement("li");
  li.className = "list-row";
  const span = document.createElement("span");
  span.innerText = inputText;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
});

console.log();
