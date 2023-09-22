// const App = () => {
//   const course = 'Half Stack application development'
  
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14


//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (props) => {
  console.log(props)  
  return (
    <h1>{props.course}</h1>
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
      <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} count={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
    </div>
    )
}



const Total = (props) => {
  console.log(props) 
  let sum =0;
  for (let i = 0; i < props.ex.length; i++) {
    sum +=props.ex[i];
  }
  return (
    
    <p> Number of exercises {sum}</p>
  )
}

const App = () => {
//   const course1 = 'Half Stack application development'
//   const parts = [
//     {name: 'Fundamentals of React', count: 10},
//     {name: 'Using props to pass data', count: 7},
//     {name: 'State of a component', count: 14}        
//  ]
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   const ex = [exercises1,exercises2,exercises3];
// const part1 ={
//   name: 'Fundamental of React', exercises: 10
// }
// const part2 ={
//   name: 'Using props to pass data', exercises: 7
// }
// const part3 ={
//   name: 'State of a component', exercises: 14
// }  

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
      
  return (
    <div>
      <Header course={course.name} />
      <Content  parts={course.parts} />
      <Total  ex={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]}/>
    </div>
  )
}


export default App