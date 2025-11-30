// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір



function changeColor() {
    const element = document.getElementById("text")
    element.classList.toggle("textColor")
}



// Вариант решения №2

// const myButton = document.getElementById('my-button');
// myButton.addEventListener('click', function() {
    // const element = document.getElementById("text")
    // element.classList.toggle("textColor")
// });