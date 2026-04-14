// const button = document.getElementById("calculate")

// const calculate = () => {
//     const sek = document.getElementById("sek").value
//     const conversion = sek * 0.091
//     document.getElementById("eur").innerHTML = conversion.toFixed(2)


// }

// button.addEventListener("click",calculate)

document.querySelector('button').addEventListener('click',() => {
    const sek = document.querySelector('input').value
    const conversion = sek * 0.091
    document.querySelector('output').innerHTML = conversion.toFixed(2)
})