const ImgBaseUrl = "https://image.tmdb.org/t/p/original";
/* REFERENCIA A LOS BOTONES  */ 
const btnContainer = document.querySelector(`.pagination`)
const previusPageBtn = document.querySelector(`.left`)
const nextPageBtn = document.querySelector(`.right`)
const cardsContainer = document.querySelector(`.cards__container`)
const pageNumber = document.querySelector(`.pages`)
const filterButtons = document.querySelectorAll(`.btn`)
const filterContainer = document.querySelector (`.options__movie`)

/* Necesitamos manejar el total de paginas   */ 

const pageController = {
    page: null,
    total: null,
    searchParameter: TRENDING_URL
}
 const renderLoader = () => { //Este nos devuelve un string con html
    return `
        <div class="lds-rings">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>    
    `//retorna el loader
 }
 //renderizar las cartas por cada una de pelis
const renderCards = () => {
    cardsContainer.innerHTML = movies.map(movie => getMovieHTML(movie)).join("")
}
const getMovieHTML = ({title,release_date,vote_average,poster_path}) => {
    return `
    <div class="card">
        <img
            class ="imagen" 
            alt = "${}"   
            >
    `
}
const getMovies = async () => {
    //Mostrar loader
    cardsContainer.innerHTML= renderLoader()
    //Llamar api
    const movies = await fetchMovies(pageController.searchParameter)
    //actualizar page controller
    pageController.total = movies.total_pages
    pageController.page = movies.page
   //manejar la pagination
    //renderizar cards
    renderCards (movies.results)
}


/* ACA SE VA A CARGAR TODO  */
const init = () => {
    window.addEventListener(`DOMContentLoaded`, getMovies)
}

init()