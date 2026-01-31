import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import dayjs from 'dayjs'
import 'dayjs/locale/uk'
dayjs.locale('uk')

const sectionDate = document.querySelector("#date")
sectionDate.className = "p-3 mb-2 bg-light-subtle text-light-emphasis d-flex justify-content-between"

const data = document.createElement("div")
data.textContent = dayjs().format('dddd, DD MMMM')
sectionDate.appendChild(data)

const time = document.createElement("div")

function updateTime() {
  time.textContent = dayjs().format('HH:mm:ss')
}
sectionDate.appendChild(time)

updateTime()
setInterval(updateTime, 1000)

const myList = document.querySelector("#myList")
myList.className = "list-group"

const newItem = document.querySelector("#newItem")
newItem.className = "form-control"

const btn = document.querySelector("#btn")
btn.className = "btn btn-outline-dark"

const inputForm = document.querySelector("#inputForm")
inputForm.className = "input-group mb-3"

function saveList() {
    const items = []

    myList.querySelectorAll("li").forEach(li => {
        const checkbox = li.querySelector("input[type='checkbox']")
        const textSpan = li.querySelector("span")

        items.push({
            text: textSpan.textContent,
            done: checkbox.checked
        });
    });

    localStorage.setItem("todoList", JSON.stringify(items))
}


btn.addEventListener("click", function () {

    const li = createTodoItem(newItem.value, false)
    myList.appendChild(li)

    newItem.value = ""
    saveList()
});


myList.addEventListener("click", function (event) {


    if (event.target.tagName === "BUTTON") {
        event.target.closest("li").remove()
        saveList()
    }

    if (event.target.type === "checkbox") {
        const span = event.target.closest("li").querySelector("span")
        span.style.textDecoration = event.target.checked ? "line-through" : "none"
        saveList()
    }
});

function createTodoItem(text, done) {
    const li = document.createElement("li")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = done

    const span = document.createElement("span")
    span.textContent = text;
    span.style.textDecoration = done ? "line-through" : "none"
    

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Видалити"
    removeBtn.className = "btn btn-outline-success"

    li.append(checkbox, " ", span, " ", removeBtn)
    li.className = "d-flex justify-content-between list-group-item list-group-item-action list-group-item-success"
    return li
}

function loadList() {
    const saved = JSON.parse(localStorage.getItem("todoList"))
    myList.innerHTML = ""

    saved.forEach(item => {
        const li = createTodoItem(item.text, item.done)
        myList.appendChild(li)
    })
}

loadList()


