import { useState } from 'react'

const StatisticLine = (props)=> {
  return(
    <>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </>
    
  )
} 

const Statistics = (props) => {
  const getSum = (good, neutral, bad) => {
    let setSum=(good+neutral+bad)
    return setSum
  }
  const getAvg = (good, neutral, bad) =>{
    let setAvg=(good+neutral-bad)/3  
    console.log(setAvg)
    return setAvg
  }
  const getPositve = (good, neutral, bad) =>{
    let setPositive = ((good+neutral)/(good+neutral+bad))*100
    console.log(setPositive)
    return setPositive
  }
      if (props.good === 0  && props.bad ===0 && props.neutral ===0) {
      return (
        <div>
          <h1>Statistics</h1>
          <h3>No Feedback Given</h3>
        </div>
      )
    }

  return(
    <>  
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticLine text = "Good" value = {props.good}/>
          </tr>
          <tr>
            <StatisticLine text = "Neutral" value = {props.neutral}/>
          </tr>
          <tr>
            <StatisticLine text = "Bad" value = {props.bad}/>
          </tr>
          <tr>
            <StatisticLine text = "All" value = {getSum(props.good, props.neutral, props.bad)}/>
          </tr>
          <tr>
            <StatisticLine text = "Average" value = {getAvg(props.good, props.neutral, props.bad)}/>
          </tr>
          <tr>
            <StatisticLine text = "Positve" value = {getPositve(props.good, props.neutral, props.bad)}/>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => {
    return (
    <button onClick={props.click}>
      {props.text}      
    </button>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad+1)
 
  return (
    <div>
      <h1>Give Feedback</h1>

      {/* <button onClick={() => setGood((good) => good + 1)}> Good {}</button>
      <button onClick={() => setNeutral((neutral) => neutral + 1)}> Neutral {}</button>
      <button onClick={() => setBad((bad) => bad + 1)}> Bad {}</button> */}

      <Button
        click={increaseGood}
        text='Good'
      />
      <Button
        click={increaseNeutral}
        text='Neutral'
      />     
      <Button
        click={increaseBad}
        text='Bad'/>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
     
      

    </div>
  )
}

export default App