const PersonForm = ({persons, setPersons, newName, newNumber, setNewName, setNewNumber}) => {
  const addName = (event) => {
    event.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber
    };

    if (persons.some((person) => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
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
        <div>name: <input onChange={handleNameChange}/> </div>
        <div>number: <input onChange={handleNumberChange}/> </div>
        <div><button type="submit">add</button></div>
      </form>
  )
}

export default PersonForm
