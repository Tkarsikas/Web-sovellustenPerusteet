let random_number_1 = 0
let random_number_2 = 0
let correctAnswerCounter = 0
let currentEquation = "+"

const getRandomNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}

const getRandomMathEcuation = () => {
    const equation = ["+", "-", "*", "/"]

    const randomIndex = Math.floor(Math.random() * equation.length)
    return equation[randomIndex]
}

const randomizeNumbers = () => {
    random_number_1 = getRandomNumberInRange(1,10)
    random_number_2 = getRandomNumberInRange(1,10)
    document.querySelector("#num1").innerHTML = random_number_1
    document.querySelector("#num2").innerHTML = random_number_2
    
    currentEquation = getRandomMathEcuation()
    document.querySelector("#equation").innerHTML = " "+ currentEquation

}

addEventListener('DOMContentLoaded', () => {
    getRandomMathEcuation()
    randomizeNumbers()
    correctAnswerCounter = 0
})

document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("input")
    const input_value = parseFloat(input.value)
    let sum = 0.0
    switch (currentEquation) {
        case "+":
            sum = random_number_1 + random_number_2
            break
        case "-":
            sum = random_number_1 - random_number_2
        break
        case "*":
            sum = random_number_1 * random_number_2
            break    
        case "/":
            sum = random_number_1 / random_number_2  
            break 
    }
    sum.toFixed(1)
    if(sum === input_value ){
        alert("oikein "+sum)
        correctAnswerCounter++
    }else {
        alert("väärin "+sum)
    }
    randomizeNumbers()
    input.value = ""
    input.focus()

    document.querySelector("output#counter").innerHTML = correctAnswerCounter
    
})