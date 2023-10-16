import { useState, useEffect } from 'react'
import axios from 'axios'
import Names from './Components/Names'
import nameService from './services/names'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [findName, setFindName] = useState('') 

  const hook = () => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])
  
  const deleteThisName = (name, id) => {
    if (window.confirm(`Delete ${name}`)){
    nameService
    .deleteName(id)
      .then(response => {
       
        nameService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
    })
  }
  }
  
  const addName = (event) => {
    event.preventDefault() // it prevents the refreshing of page (prevent default behaviour of submit button)
    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }
                
    let flag = 0
    for (let i = 0; i < persons.length; i++) {
      const element = persons[i]
      const cmpResult = areTheseNamesEqual(nameObject, element)
      if(flag === 0 && cmpResult.result){
        console.log(i)
        flag = 1
        if (window.confirm(nameObject.name+ ' is already added to phonebook, replace the old number with a new one ?')){
          nameService
          .update(cmpResult.cmp, nameObject)
          .then(returnedName => {
            nameService
            .getAll()
            .then(initialNames => {
              setPersons(initialNames)
      })

          })
        }
      }
    } 

    
      if (flag === 0){
        console.log("inside")
        nameService
        .create(nameObject)
        .then(returnedName => {
          setPersons(persons.concat(returnedName))
          setNewName('')
        })
      }
      setNewName('')  
      setNewNum('')
   }
  


  const handleNameChange = (event) => { 
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => { 
    setNewNum(event.target.value)
  }

  const handleFindName =(event) => {
    setFindName(event.target.value)
  }


  function areTheseNamesEqual(newEnteredName, nameAlreadyInList) {
    const al = Object.getOwnPropertyNames(newEnteredName);
    
    const bl = Object.getOwnPropertyNames(nameAlreadyInList);
  
    if (al.length !== bl.length){
      console.log("key len comp")
      return {
      result: false,
      cmp: -1};
    }
  
    const hasAllKeys = al.every(value => !!bl.find(v => v === value));
   
    if (!hasAllKeys) {
      console.log("inside key comp")
    return {
      result: false,
      cmp: -1};
    }

    // for (const key of al){

     if (newEnteredName['name'] !== nameAlreadyInList['name']){ 
      // console.log("inside value comparison")
     return {
      result: false,
      cmp: -1};
     }
    // }    
    
    return {
      result: true,
      cmp: nameAlreadyInList.id
    };
  }
  
  return (
    <div>
      <h2>Phonebook</h2>

      <div>
       <label>filter shown with:</label>
       <input 
          value={findName} 
          onChange={handleFindName} 
        />    
        
      </div>
        <br /> <br />
      <form onSubmit={addName}>
        <label>Name:</label>
        <input 
          value={newName} 
          onChange={handleNameChange} 
        />
        <label>Number:</label>
        <input 
          value={newNum} 
          onChange={handleNumChange} 
        />          
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Names 
          filterName={findName} 
          persons={persons} 
          deleteName = {deleteThisName} 
          />           
         </ul>    
    </div>
  )
}

export default App