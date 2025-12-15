// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.


const form = document.querySelector("form")
const nameInput = document.querySelector("#title")
const messageInput = document.querySelector("#message")
const phoneInput = document.querySelector("#phone")
const emailInput = document.querySelector("#email")

messageInput.addEventListener("change", function(){
    messageInput.setCustomValidity("")
})

emailInput.addEventListener("change", function(){
    emailInput.setCustomValidity("")
})

phoneInput.addEventListener("change", function(){
    phoneInput.setCustomValidity("")
})


form.addEventListener("submit", function(event){
    event.preventDefault()
    

    let isValid = true
    if(messageInput.value.length < 5){
        messageInput.setCustomValidity("Повідомлення повинно бути більше 5 символів")
        isValid = false
    }
    
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
       emailInput.setCustomValidity("email обов'язково повинен мати @ та крапку")
       isValid = false
    }

    if(!phoneInput.value.startsWith("+380")){
        phoneInput.setCustomValidity("Номер телефону повинен починатися на +380")
        isValid = false
    }
    
    if(!isValid){
        form.reportValidity()
        return
    }

    const data = Object.fromEntries(new FormData(event.target).entries())
    console.log("data: ", data)
})