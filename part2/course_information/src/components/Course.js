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

export default Course
