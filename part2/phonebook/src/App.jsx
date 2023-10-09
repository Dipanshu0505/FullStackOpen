import { useState } from 'react'
import Names from './Components/Names'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [findName, setFindName] = useState('') 
  
  const addName = (event) => {
    event.preventDefault() // it prevents the refreshing of page (prevent default behaviuor of submit button)
    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }
    let flag = 0
    for (let i = 0; i < persons.length; i++) {
      const element = persons[i]
      // console.log({i}, persons[i])
      if(areTheseNamesEqual(nameObject, element)){
        flag = 1
        alert(nameObject.name+ ' is already added to phonebook')
      }       
    }
    if(flag === 0) 
      setPersons(persons.concat(nameObject))
    setNewName('')
    setPersons(persons.concat(nameObject))
    setNewNum('')
    // console.log('button clicked', event.target)
    console.log(persons)
  }

  const handleNameChange = (event) => { 
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => { 
    // console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFindName =(event) => {
    // insert value in findName
    setFindName(event.target.value)
  }





  function areTheseNamesEqual(newEnteredName, nameAlreadyInList) {
    const al = Object.getOwnPropertyNames(newEnteredName);
    // console.log("returning value of " , al )
    const bl = Object.getOwnPropertyNames(nameAlreadyInList);
  
    if (al.length !== bl.length) return false;
  
    const hasAllKeys = al.every(value => !!bl.find(v => v === value));
  
   
    if (!hasAllKeys) return false;

    for (const key of al){

     if (newEnteredName[key] !== nameAlreadyInList[key] && key !== "id") 
     return false;
    }    
    return true;
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
        <Names filterName={findName} persons={persons}/>      
         {/* findname is assigned to filtername & persons(mainlist) is assigned to persons. filterName & persons are sent to Names. */}
      </ul>    
    </div>
  )
}

export default App