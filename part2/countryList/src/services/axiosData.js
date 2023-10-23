import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const singleCountryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = import.meta.env.VITE_API_KEY


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const singleCountryDetail = (singleCountryName) => {
  const request = axios.get(`${singleCountryUrl}/${singleCountryName}`)
  return request.then(response => response.data)
}

const countryWeather = (cityName) => {
  const request = axios.get(`${weatherUrl}q=${cityName}&appid=${apiKey}`)
  return request.then(response => response.data)
}

export default { getAll, singleCountryDetail, countryWeather }