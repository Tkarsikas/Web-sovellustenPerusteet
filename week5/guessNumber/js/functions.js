const getRandomNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}



document.querySelector("button").addEventListener("click", () => {
    const random_number = getRandomNumberInRange(1,6)
    const input = document.querySelector("input")
    const guess = Number(input.value)

    if(guess === random_number){
        alert("You gessed right, number is " + random_number)
    }else{
        alert("You gessed wrong, number is " + random_number)
    }

    input.value = ""
    input.focus()
})