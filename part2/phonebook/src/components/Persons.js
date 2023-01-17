import personsService from '../services/persons'

const Persons = ({ persons, setPersons, filter, setSuccessMsg }) => {
  const removePerson = person => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id)
        .then(() => {
          setSuccessMsg(`Deleted ${person.name}`)
          setTimeout(() => {
            setSuccessMsg(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  return (
    <>
      {
        persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((person) =>
            <p key={person.name}>
              {person.name} {person.number}
              <button onClick={() => removePerson(person)}>delete</button>
            </p>
          )
      }
    </>
  )
}

export default Persons
