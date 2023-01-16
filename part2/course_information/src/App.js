const Header = ({ courseName }) =>
  <h1>{courseName}</h1>

const Part = ({ part, exercises }) =>
  <p>{part} {exercises}</p>

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />)

const Total = ({ parts }) =>
  <b>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</b>

const Course = ({ course }) => ( 
  <div>
    <Header courseName={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
 )

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => <Course course={course} />)}
    </div>
  )
}

export default App