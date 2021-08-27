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

  // 削除
  deleteButton.addEventListener("click", () => {
    document
      .getElementById("incomplete-list")
      .removeChild(deleteButton.parentNode);
  });

  // 完了
  completeButton.addEventListener("click", () => {
    const completeText = completeButton.previousElementSibling.innerText;
    console.log(completeText);

    const li = document.createElement("li");
    li.className = "list-row";
    const span = document.createElement("span");
    span.innerText = completeText;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    li.appendChild(span);
    li.appendChild(returnButton);

    // 完了したTODOリストに追加
    document.getElementById("complete-list").appendChild(li);

    // 未完了のTODOリストから削除
    document
      .getElementById("incomplete-list")
      .removeChild(deleteButton.parentNode);
  });

  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
});

console.log();
