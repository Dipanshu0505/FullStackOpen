import { useState, useEffect } from 'react'
import countryService from '../services/axiosData'
import CountryWeather from './CountryWeather'
 
const CountryDetails = (props) => {
    if(props.cName === null) return null
    
    const [cDetails, setCDetails] = useState({})
    
    useEffect(() => {
        countryService
            .singleCountryDetail(props.cName)
            .then(response => setCDetails(response))
    }, [props.cName])
    console.log(typeof(singleCountryDetail))

    

    // console.log(cDetails)
    if(Object.entries(cDetails).length === 0) return null

    return (
        <>
            <h1>{cDetails.name.common}</h1>
            <p>Capital {cDetails.capital[0]}</p>
            <p>Area {cDetails.area}</p>
            <p>Languages</p>
            <ul>
                {Object.keys(cDetails.languages).map((key, index) => {
                    return (
                        <li key={index}>{cDetails.languages[key]}</li>
                    ) 
                })}
            </ul>
            <img src={cDetails.flags.svg} alt={cDetails.flags.alt} width="400"/>
            

            <CountryWeather cityName={cDetails.capital[0]} cName={props.cName}/>
            
        </>
    )
}

export default CountryDetails