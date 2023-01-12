const Header = ({ course }) =>
  <h1>{course}</h1>

const Part = ({ part, exercises }) =>
  <p>{part} {exercises}</p>

// "there is no need to go through the arrays using loops", but not prohibited
// either? ok, technically not using loops, but still iterating through em
const Content = ({ parts }) =>
  parts.map((part) => <Part part={part.name} exercises={part.exercises} />)

const Total = ({ parts }) =>
  <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>

const App = () => {
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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
