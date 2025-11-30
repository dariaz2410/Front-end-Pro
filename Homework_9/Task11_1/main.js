// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно


function tablePifagora(){

  let table = document.createElement("table")
  let parentElement = document.getElementById("container")
  parentElement.appendChild(table)

  for(i=1; i<=10; i++){
    let row = document.createElement("tr")
    table.appendChild(row)

    for(j=1; j<=10; j++){
        let col = document.createElement("td")
        col.textContent = i*j
        table.appendChild(col)
    } 
  }
}

tablePifagora()

