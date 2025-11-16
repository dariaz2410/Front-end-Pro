// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 5, 'dff', 10, 22, {name: 'Anna'}, 2]

let sum = 0
let counter = 0
function arithmMean (x) {
for (let arr of x){
  if (typeof(arr)==="number") {
    sum+=arr
    counter++
  }
}
return sum/counter
}

s = arithmMean(arr)
console.log("Середнє арифметичне чисел массиву:", s)