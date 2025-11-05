let num = prompt('Введіть число більше 1')
let c = true

for(i=2; i<num; i++){
    if(num%i === 0){
        c = false
        break
    }
}

if (c===false) {
   console.log('число не просте') 
} else {
    console.log('число просте') 
}
