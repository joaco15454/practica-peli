const KEY = "362c5b12f1ca01b9a8cf97ed8697a368";

const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

const fetchMovies = async (searchUrl, page = 1) => {
    const response = await fetch (`${searchUrl}&page=${page}`)
    const responseData = await response.json()
    console.log(responseData)
    return fetchMovies
}
