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
    deleteFromImcompleteList(deleteButton.parentNode);
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

    // 戻す
    returnButton.addEventListener("click", () => {
      const returnText = returnButton.previousElementSibling.innerText;
      const li = document.createElement("li");
      li.className = "list-row";
      const span = document.createElement("span");
      span.innerText = returnText;
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";

      li.appendChild(span);
      li.appendChild(completeButton);
      li.appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(li);

      document
        .getElementById("complete-list")
        .removeChild(returnButton.parentNode);
    });

    li.appendChild(span);
    li.appendChild(returnButton);

    // 完了したTODOリストに追加
    document.getElementById("complete-list").appendChild(li);

    // 未完了のTODOリストから削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
});

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
