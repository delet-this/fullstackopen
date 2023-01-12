import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  const nextAnecdote = () => {
    let randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    // don't choose same anecdote twice
    while (randomAnecdote === selected) {
      randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomAnecdote)
  }

  const vote = () => {
    const pointsNew = [...points];
    pointsNew[selected]++;
    setPoints(pointsNew)

    const newMostVotesIndex = anecdotes.reduce((acc, _, i) =>
      pointsNew[i] > pointsNew[acc] ? i : acc
      , 0)
    setMostVotesIndex(newMostVotesIndex)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => vote()}>vote</button>
      <button onClick={() => nextAnecdote()}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {points[mostVotesIndex]} votes</p>
    </>
  )
}

export default App
