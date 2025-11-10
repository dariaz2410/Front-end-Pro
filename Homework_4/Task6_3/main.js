// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const users = [
  { name: 'Anna', tel: 80505750966, mail: 'anna@gmail.com' },
  { name: 'Petro', tel: 80505750988, mail: 'petro@gmail.com' },
  { name: 'Irina', tel: 80505750922, mail: 'irina@gmail.com' },
];

let searchName = prompt("Введіть ім'я для пошуку")
const activeUsers = users.filter(user => user.name===searchName);
console.log(activeUsers);

let userName = prompt("Введіть ваше ім'я", )
let userTel = prompt("Введіть ваш номер телефону")
let userMail = prompt("Введіть ваш mail")

users.push({ name: userName, tel: +userTel, mail: userMail })
console.log(users);