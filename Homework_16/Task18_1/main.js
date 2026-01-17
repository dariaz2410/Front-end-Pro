const input = document.querySelector(".input")
const timer = document.querySelector(".timer")
const button = document.querySelector(".btn")

let time = 0
let myTimer
let isRunning = true

button.addEventListener("click", ()=>{

    if (isRunning) {
        if(time === 0){
            time = input.value
        } 
        myTimer = setInterval(countdown, 1000);
        isRunning = false;
        button.textContent = "Пауза";
    } else {
        clearInterval(myTimer);
        isRunning = true;
        button.textContent = "Старт";
    }
})

function countdown(){
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    if(seconds < 10){
        seconds = "0" + seconds
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    timer.innerHTML = `${minutes} : ${seconds}`
    time--
    if (time < 0){
        clearInterval(myTimer)
    }
}

