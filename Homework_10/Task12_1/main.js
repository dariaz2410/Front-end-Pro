// На сторінці є дві кнопки. 
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const addLink = document.querySelector("#addLink")

const redirectionLink = document.querySelector("#redirectionLink")

addLink.addEventListener("click", function(){
  const newLink = prompt("Введіть посилання")
    redirectionLink.addEventListener("click", function(){
      window.location.href = newLink
    })
})




