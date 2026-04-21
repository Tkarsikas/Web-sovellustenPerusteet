const table = document.querySelector("table")
const additional_p = document.querySelector("p#additional")
const plus_p = document.querySelector("p#plus")
const numbers = []

while (numbers.length < 9){
    const random_number = Math.floor(Math.random()*40) + 1
    if(!(numbers.includes(random_number))){
        numbers.push(random_number)
    }
}

const additional_number = numbers[7]
const plus_number = numbers[8]
const actual_numbers = numbers.slice(0,7)

actual_numbers.sort((a,b) => a-b)

const tr = table.insertRow()
actual_numbers.forEach((number) => {
    const td = tr.insertCell()
    td.innerHTML = number
})

additional_p.innerHTML = additional_number
plus_p.innerHTML = plus_number

