const form = document.querySelector("form")
const usernameinput = document.querySelector("input#username")
const passwordinput = document.querySelector("input#password")
const submitbtn = document.querySelector("button#submitbtn")
const clearbtn = document.querySelector("button#clearbtn")
const messageP = document.querySelector("p")


document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName')
    const password = localStorage.getItem('password')
    if(userName || password){
        usernameinput.value = userName || ''
        passwordinput.value = password || ''
        messageP.innerHTML = 'Retrieved from localStorage'
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userName = usernameinput.value.trim()
    const password = passwordinput.value.trim()

    if(!userName || !password){
        messageP.innerHTML = 'Enter username and password'
        return
    }

    localStorage.setItem('userName', userName)
    localStorage.setItem('password', password)
    messageP.innerHTML = 'Saved to localStorage'
})

clearbtn.addEventListener('click', () => {
    localStorage.removeItem('userName')
    localStorage.removeItem('password')
    usernameinput.value = ""
    passwordinput.value = ""
    messageP.innerHTML = 'Username and password cleared'
})