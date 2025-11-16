// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

let myString = prompt("Введіть фразу", )
myString = myString.split("");

let myCharacters = prompt("Введіть символи, що треба видалити", )
myCharacters=myCharacters.split("")

function delCharacters(x,y){
  let result = ''
  for(let arr of x){
    if (!y.includes(arr)){
      result +=arr
    }
  }
  return result
}

let result = delCharacters(myString, myCharacters)

console.log(result)
