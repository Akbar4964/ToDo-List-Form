const elAllToDoList = document.querySelector(".all-todo-list");

const elTemplate = document.querySelector("#template");

const elToDoContent = document.querySelector(".todo-content");

const elToDoContentText = document.querySelector(".todo-content-text");

const elToDoEdit = document.querySelector(".todo-edit");

const elToDoDelete = document.querySelector(".todo-delete");

let list = localStorage.getItem("keys")
  ? JSON.parse(localStorage.getItem("keys"))
  : [];
