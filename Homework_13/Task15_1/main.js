const myList = document.querySelector("#myList")
const newItem = document.querySelector("#newItem")
const btn = document.querySelector("#btn")

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

    li.append(checkbox, " ", span, " ", removeBtn)
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