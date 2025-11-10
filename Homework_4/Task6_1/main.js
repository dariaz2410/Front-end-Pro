// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

let person = {
    userName: 'Vlad',
    age: 33,
    city: 'Dnipro'
}

const entries = Object.entries(person)
console.log(entries)