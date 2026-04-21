
const table = document.querySelector("table")
const p = document.querySelector("p")
const button = document.querySelector("button")
const template = document.querySelector("#row-template")
let rows = 0

button.addEventListener('click', () =>{
    // const tr = table.insertRow()
    // for (let i = 0; i < 7; i++){
    //     const td = tr.insertCell(i)
    //     td.innerHTML = Math.floor(Math.random() * 10)
    // }

    const clone = template.content.firstElementChild.cloneNode(true)
    clone.querySelectorAll('td').forEach(td => td.textContent = Math.floor(Math.random()*10));
    table.appendChild(clone)

    p.innerHTML = `Valmiita rivejä ${++rows}`
})