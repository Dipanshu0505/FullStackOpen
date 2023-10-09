const Names =(props) => {
    const searchNameLength = props.filterName.length
    const a = props.persons.map(person => {
      return person.name.substring(0, searchNameLength).toLowerCase() === props.filterName.toLowerCase()
    })
    const filteredNames = props.persons.filter((_, i) => a[i]); 
    const personsToShow = (props.filterName.length === 0) ? props.persons : filteredNames
    return (
      personsToShow.map(a =>  
      <li key={a.id}>{a.name} {a.number}</li>
    ))
  }
export default Names