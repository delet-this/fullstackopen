import { useState } from 'react'

const Button = ({ handler, text }) =>
  <button onClick={handler}>{text}</button>

const Survey = ({ handleGood, handleNeutral, handleBad }) => (
  <>
    <Button handler={handleGood} text={"good"} />
    <Button handler={handleNeutral} text={"neutral"} />
    <Button handler={handleBad} text={"bad"} />
  </>
)

const StatisticsLine = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad

  if (sum === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"average"} value={((good * 1 + bad * (-1)) / sum)} />
        <StatisticsLine text={"positive"} value={good / sum * 100 + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Survey
        handleGood={() => setGood(good + 1)}
        handleNeutral={() => setNeutral(neutral + 1)}
        handleBad={() => setBad(bad + 1)}
      />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
