const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list container");
const listItems = document.querySelectorAll("ul li");

showTask();
function addTask() {
  if (inputBox.value === "") {
    alert("Write something");
  } else {
    let li = document.createElement("li");
    let listItem = document.createElement("p");
    listItem.textContent = inputBox.value;
    li.appendChild(listItem);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
    if (e.target.tagName === "P") {
      let placeholder = inputBox.placeholder;
      let inputClone = document.createElement("input");
      inputClone.placeholder = placeholder;
      inputClone.id = "input-box";
      let newText = document.createElement("p");
      e.target.replaceWith(inputClone);
      inputClone.focus;
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          let inputText = inputClone.value;
          console.log(inputText);
          newText.textContent = inputText;
          inputClone.replaceWith(newText);
          inputClone.remove();
          let liItem = newText.parentElement;
          liItem.classList.remove("checked");
        }
      });
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
