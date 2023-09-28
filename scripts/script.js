const elToDoInput = document.querySelector(".todo-input");

const elAllToDoList = document.querySelector(".all-todo-list");

const elTemplate = document.querySelector("#template");

const elToDoEdit = document.querySelector(".todo-edit");

const elToDoDelete = document.querySelector(".todo-delete");

let list = localStorage.getItem("keys")
  ? JSON.parse(localStorage.getItem("keys"))
  : [];

elToDoInput.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const value = elToDoInput.value;
  const findValue = list.findIndex((el) => el.name === value.trim());
  if (value === "") {
    alert("Ma'lumot kiritilmadi!");
  } else if (findValue < 0) {
    const createNewObject = {
      name: value.trim(),
      id: Date.now(),
    };
    list.push(createNewObject);
  } else {
    alert(`${findValue} mavjud!`);
  }
  elToDoInput.value = null;
});

function createContent(item) {
  const element = elTemplate.cloneNode(true);
  element.querySelector("")
}
