"use strict";

require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
require("dayjs/locale/uk");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_dayjs.default.locale('uk');
var sectionDate = document.querySelector("#date");
sectionDate.className = "p-3 mb-2 bg-light-subtle text-light-emphasis d-flex justify-content-between";
var data = document.createElement("div");
data.textContent = (0, _dayjs.default)().format('dddd, DD MMMM');
sectionDate.appendChild(data);
var time = document.createElement("div");
function updateTime() {
  time.textContent = (0, _dayjs.default)().format('HH:mm:ss');
}
sectionDate.appendChild(time);
updateTime();
setInterval(updateTime, 1000);
var myList = document.querySelector("#myList");
myList.className = "list-group";
var newItem = document.querySelector("#newItem");
newItem.className = "form-control";
var btn = document.querySelector("#btn");
btn.className = "btn btn-outline-dark";
var inputForm = document.querySelector("#inputForm");
inputForm.className = "input-group mb-3";
function saveList() {
  var items = [];
  myList.querySelectorAll("li").forEach(function (li) {
    var checkbox = li.querySelector("input[type='checkbox']");
    var textSpan = li.querySelector("span");
    items.push({
      text: textSpan.textContent,
      done: checkbox.checked
    });
  });
  localStorage.setItem("todoList", JSON.stringify(items));
}
btn.addEventListener("click", function () {
  var li = createTodoItem(newItem.value, false);
  myList.appendChild(li);
  newItem.value = "";
  saveList();
});
myList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.closest("li").remove();
    saveList();
  }
  if (event.target.type === "checkbox") {
    var span = event.target.closest("li").querySelector("span");
    span.style.textDecoration = event.target.checked ? "line-through" : "none";
    saveList();
  }
});
function createTodoItem(text, done) {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = done;
  var span = document.createElement("span");
  span.textContent = text;
  span.style.textDecoration = done ? "line-through" : "none";
  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Видалити";
  removeBtn.className = "btn btn-outline-success";
  li.append(checkbox, " ", span, " ", removeBtn);
  li.className = "d-flex justify-content-between list-group-item list-group-item-action list-group-item-success";
  return li;
}
function loadList() {
  var saved = JSON.parse(localStorage.getItem("todoList"));
  myList.innerHTML = "";
  saved.forEach(function (item) {
    var li = createTodoItem(item.text, item.done);
    myList.appendChild(li);
  });
}
loadList();