// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. 
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, 
// який дозволить видаляти завдання при кліку на них.
// Покроковий план:
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const myList = document.querySelector("#myList")

myList.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        event.target.closest("LI").remove()
    }
})

const newItem = document.querySelector("#newItem")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    const textItem = document.createElement("LI")
    textItem.textContent = newItem.value 
    const removeBtn = document.createElement("BUTTON")
    removeBtn.textContent = "Видалити"
    myList.appendChild(textItem)
    textItem.appendChild(removeBtn)
})