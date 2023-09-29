import { useState } from 'react'


const App = () => {
  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;   
  }

  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const findIndexOfHighestNumber = (votesCount) => {
    let maxIndex =0;
    for (let i = 1; i< votesCount.length; i++) {
      if (votesCount[i] > votesCount[maxIndex]){
        maxIndex= i;
      }
    }
    return maxIndex;
    }
     

  const setRandom = () => {
    setSelected(getRandomNum(0, anecdotes.length-1))    
  }

 
   
  const [selected, setSelected] = useState(0)
  const l = anecdotes.length;
  const initializedArray = Array(l).fill(0)
  // console.log(initializedArray)

  


  const [votesCount, increaseVote] = useState(initializedArray)

  console.log(findIndexOfHighestNumber(votesCount))

  const voteSet = (selected) => {
    const copy =[...votesCount] //created a copy of voesCount array
    copy[selected] += 1   
    increaseVote(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]} </p>
      <p>has {votesCount[selected]} votes</p>
      
      <button onClick={() => voteSet(selected)}>vote</button>

      <button onClick={setRandom}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findIndexOfHighestNumber(votesCount)]}</p>
      <p>has {votesCount[findIndexOfHighestNumber(votesCount)]} votes</p>


    </div>
  )
}

export default App