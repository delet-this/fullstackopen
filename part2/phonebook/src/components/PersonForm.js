import personsService from '../services/persons'

const PersonForm = ({
  persons, setPersons, newName, newNumber,
  setNewName, setNewNumber, setSuccessMsg }) => {
  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    };


    // person already exists
    if (persons.some((person) => person.name === newPerson.name)) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const oldPerson = persons.find(p => p.name === newName)
        const changedPerson = { ...oldPerson, number: newNumber }

        personsService.update(changedPerson)
          .then(resultPerson => {
            setPersons(persons.map(p => p.id === resultPerson.id ? resultPerson : p))
            setSuccessMsg(`Changed the number for ${newName}`)
            setTimeout(() => {
              setSuccessMsg(null)
            }, 5000)
          })
      }
    }
    // person doesn't exist yet
    else {
      personsService.add(newPerson)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setSuccessMsg(`Added ${newName}`)
          setTimeout(() => {
            setSuccessMsg(null)
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  return (
    <form onSubmit={addName}>
      <div>name: <input onChange={handleNameChange} /> </div>
      <div>number: <input onChange={handleNumberChange} /> </div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm
