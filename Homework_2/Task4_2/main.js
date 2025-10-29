let num = prompt("Введіть тризначне число");
let arr = String(num).split('').map(Number);

if (arr[0]===arr[1] && arr[1]===arr[2]) {
    alert("Всі цифри в числі однакові")
} 
else if (arr[0]===arr[1] || arr[0]===arr[2] || arr[1]===arr[2]) {
    alert("Лише дві цифри в числі однакові")
}
else {
    alert("Всі цифри в числі різні")
}