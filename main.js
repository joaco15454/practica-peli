const buscador = document.querySelector(`#buscador`)
const btnEnviar = document.querySelector(`.btn__search`)
const form = document.querySelector(`#form`)
const containerClima = document.querySelector(`.container__clima`)

const pasarKelvinAc = (grados) => {
    const gradosFinal = Math.floor(grados - 273)
    return gradosFinal
}

const getCityHTML = (city) => {  
return `
<div class ="climatotal">
<div class="clima__izquierda"> 
            <h2 class="localidad">${city.name}</h2>
            
            <p class="estado">${city.weather[0].description}</p>
            <span class="temperatura__actual">${pasarKelvinAc(city.main.temp)}°</span>
        </div class="clima__medio">
            <img class ="soleado"src="./assets/soleado.jpg" alt="foto soleado">
        <div class="clima__derecha">
            <span class="max"><i class="fa-solid fa-arrow-up"></i>temp max:${pasarKelvinAc(city.main.temp_max)}°</span>
            <span class="min"><i class="fa-solid fa-arrow-down"></i>temp min:${pasarKelvinAc(city.main.temp_min)}°</span>
            <p class="humedad">${city.main.humidity}% humedad</p>
        </div>
        </div>`
}

let cities = JSON.parse(localStorage.getItem(`cities`)) || [];
let renderCitiesList = (cities) => {
    containerClima.innerHTML= cities.map(city => getCityHTML(city)).join("")
}
const saveLocalStorage = cities => {
    localStorage.setItem(`Cities`, JSON.stringify(cities))
}
const searchCity = async (e) => {
    e.preventDefault();
    const searchedCity = buscador.value.trim()
    if (searchedCity === ``) {
        alert(`Esta vacio`)
        return
    }
    const fetchedCity = await requestCity(searchedCity)
    if (!fetchedCity.id) {
        alert(`Ciudad ingresa no existe`)
        form.reset()
        return
    }
    else {

    }
    cities = [fetchedCity,...cities]
    renderCitiesList(cities);
    saveLocalStorage(cities);
    form.reset()
}

const init = () => {
    renderCitiesList(cities)
    form.addEventListener(`submit`, searchCity)
}
init()