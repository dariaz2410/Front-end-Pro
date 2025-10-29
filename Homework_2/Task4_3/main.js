let yearBirth = prompt("Введіть ваш рік народження", "")
let age

if (yearBirth===null || yearBirth=== "") {
    age=`Шкода, що Ви не захотіли ввести свій рік народження.`;
}
else {
    age=`Ваш вік: ${2025-yearBirth}.`
}

let city = prompt("Введіть ваше місто")
const kyiv = "Київ"
const london = "Лондон"
const washington = "Вашингтон"
let messageCity

if (city===null){
    messageCity=`Шкода, що Ви не захотіли ввести своє місто.`
}
else if (city === kyiv || city === london || city === washington) {
    messageCity=`Ти живеш у столиці ${city} `
}
else if (city !== "") {
    messageCity=`Tи живеш у місті ${city}`
}
else {
    messageCity=`Шкода, що Ви не захотіли ввести своє місто.`
}

let sport = prompt("Вкажіть ваш улюблений вид спорту")
let messageSport
const football = "футбол"
const basketball ="баскетбол"
const box ="бокс"
const footballer = "Ліонель Мессі"
const basketballPlayer = "Майкл Джордан"
const boxer = "Олександр Усик"

if (sport===null) {
    messageSport=`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`
}
else if (sport === football) {
    messageSport=`Круто! Хочеш стати як ${footballer}?`
} 
else if (sport === basketball) {
    messageSport=`Круто! Хочеш стати як ${basketballPlayer}?`
}
else if (sport === box) {
    messageSport=`Круто! Хочеш стати як ${boxer}?`
}
else if (sport !== "") {
    messageSport=`Ваш улюблений вид спорту ${sport}`
}
else {
    messageSport=`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`
}

alert(`${age}\n${messageCity}\n${messageSport}`)