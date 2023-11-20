import { useState, useEffect } from "react";
import countryService from '../services/axiosData'


const CountryWeather = (props) => {
    if(props.cityName === null) return null
    const [weather, setWeather] = useState({})

    useEffect (() => {
        countryService
        .countryWeather(props.cityName)
        .then(response =>setWeather(response))
    }, [props.cName])

    if(Object.entries(weather).length === 0) return null
    console.log(weather)
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    return(
        <>
            <h3>Weather in {props.cityName}</h3>
            <p>temperature {(weather.main.temp-273.15).toFixed(2)} Celcius   </p>
            <img src={iconUrl} alt="icon logo" border="1"/>
            <p>wind {weather.wind.speed} m/s</p>
        </>
    )
}

export default CountryWeather