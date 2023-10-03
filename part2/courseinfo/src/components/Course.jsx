const Course = (props) => {
    return (
      <div >
        <h1>Web developmement curriculum</h1>
        {props.course.map(courseObject => {
          return (
                <div key={courseObject.id}>
                    <Header course={courseObject.name} />
                    <Content parts={courseObject.parts} />
                    <Total ex={courseObject.parts}/>
                 </div>
            )
        })}
    
        {/* // <Header courses={props.course.name} />  
        // <Content parts={props.course.parts}/>
        // <Total ex={props.course.parts}/>  */}
      </div>
    )  
}

const Header = (props) => {
// console.log(props)  
return (
    <h3>{props.course}</h3>
)
}

const Part = (props) => {
return (
    <p>{props.name} {props.count}</p>
)
}
  
const Content = (props) => {  
return (    
    <div>   
    {props.parts.map(coursePart => {
        return (
        <Part key={coursePart.id}name={coursePart.name} count={coursePart.exercises}/>
        )
    })}
    
    
    {/* <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} count={props.parts[1].exercises}/> */}
    {/* <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
    <Part name={props.parts[3].name} count={props.parts[3].exercises}/> */}
    </div>
)
}

const Total = (props) => {

// console.log(props.ex)
const sumWithInitial = props.ex.reduce((accumulator, currentValue) => accumulator += currentValue.exercises, 0);
return (
    <p> <b>Total of {sumWithInitial} exercises</b></p>
)
}
  

export default Course