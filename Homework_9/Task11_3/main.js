// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)


let num = Math.floor(Math.random() * 10);
//console.log(num);

let img ="./images/img-"+num+".jpg"

const image = document.getElementById("myImage");
image.setAttribute("src", img);
