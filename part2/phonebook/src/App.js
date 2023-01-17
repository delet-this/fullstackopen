import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NotificationSuccess from './components/NotificationSuccess'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <NotificationSuccess message={successMsg} />

      <Filter setFilter={setFilter} />

      <h2>Add a new</h2>

      <PersonForm
        persons={persons} setPersons={setPersons} newName={newName}
        newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        successMsg={successMsg} setSuccessMsg={setSuccessMsg}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons} setPersons={setPersons} filter={filter}
        successMsg={setSuccessMsg} setSuccessMsg={setSuccessMsg}
      />
    </div>
  )

}

export default App
