import { useState, useEffect } from 'react'
import axios from 'axios'
import nameService from './services/axiosData'
import CountryDetails from './Components/countryDetails'

const DisplayList = (props) => {
  // console.log(props.countryNames)
  if(props.countryNames === undefined) return null

  const a = props.countryNames.map(country => {
    return country.toLowerCase().includes(props.filterName.toLowerCase())
  })
  const matches = props.countryNames.filter((_, i) => a[i])
  console.log(matches)
  if(matches.length > 10){
    return (
      <>
        <p>Too many matches, use different filter name</p>
      </>
    )
  }

  else{
    return (
      <>
        <ul>
          {matches.map((match, index) => {
            return(
              <li key={index}>
                {match} <button onClick={() => props.changeDisplayName(match)}>Show</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

function App() {
  const [countries, setCountries] = useState([])
  const [findName, setFindName] = useState('')
  const [displayCountry, setDisplayCountry] = useState(null)
  
  
  useEffect(() => {
    nameService
      .getAll()
      .then(cNames => {
        setCountries(cNames)
      })
  }, [])

  // console.log(countries[0])
  
  const countryNames = countries.map(country => {
    return country.name.common
  })
  // console.log(countryNames)

  const handleFindName =(event) => {
    setFindName(event.target.value)
  }

  const changeDisplayName = (dispName) => {
    setDisplayCountry(dispName)
  }


  return (
    
      
      <div>
       <label>find countries:</label>
       <input 
          value={findName} 
          onChange={handleFindName} 
        />    
        
        <DisplayList countryNames={countryNames} filterName={findName} changeDisplayName={changeDisplayName}/>
      
        <CountryDetails cName={displayCountry} />

      </div>
      
    
  )
}

export default App
