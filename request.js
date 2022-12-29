
const API_key = `5c7cbbd351ee0d1209f5e54c1dbfc8ad`

const requestCity = async (city) => {
    const mainURL= `https://api.openweathermap.org/data/2.5/weather`
    const queryParams = `?q=${city}&appid=${API_key}`
    const response = await fetch(mainURL + queryParams)
    const responseData = await response.json()
    console.log(responseData)
    return responseData;
}
requestCity(`Rosario`)