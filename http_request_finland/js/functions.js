const name_element = document.querySelector("h2")
const flag_element = document.querySelector("img")
const capital_label = document.querySelector("#capital")
const population_label = document.querySelector("#population")
const region_label = document.querySelector("#region")
const currency_label = document.querySelector("#currency")
const status_element = document.querySelector("#status")
const section_element = document.querySelector("section#info")

const btn_element = document.querySelector("#countrybtn")
const input_element = document.querySelector("input")

status_element.innerHTML = "Syötä haluamasi maa"

btn_element.addEventListener("click", () => {
    getCountry(input_element.value)
})

const getCountry = async(country) => {
try {
    country.toLowerCase()
    const url = "https://restcountries.com/v3.1/name/" + country
    const response = await fetch(url)
    if(response.ok) {
        const json = await response.json()
        name_element.innerHTML = json[0].name.common
        capital_label.innerHTML = json[0].capital[0]
        const currencyCodes = Object.keys(json[0].currencies)
        const firstCurrencyCode = currencyCodes[0]
        
        currency_label.innerHTML = json[0].currencies[firstCurrencyCode].name
        population_label.innerHTML = json[0].population.toLocaleString("fi-FI")
        region_label.innerHTML = json[0].region
        flag_element.src = json[0].flags.png
        section_element.hidden = false
        status_element.hidden = true
    }else{
        status_element.hidden = false
        status_element.innerHTML = "Tietojen haku epäonnistui"
    } 
}catch(error){
    status_element.hidden = false
    status_element.innerHTML = "Virhe: Tietoja ei voida hakea"
    section_element.hidden = true
}
}

