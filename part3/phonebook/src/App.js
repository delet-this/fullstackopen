import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NotificationSuccess from './components/NotificationSuccess'
import NotificationError from './components/NotificationError'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMsg, setSuccessMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <NotificationSuccess message={successMsg} />
      <NotificationError message={errorMsg} />

      <Filter setFilter={setFilter} />

      <h2>Add a new</h2>

      <PersonForm
        persons={persons} setPersons={setPersons} newName={newName}
        newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        setSuccessMsg={setSuccessMsg}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons} setPersons={setPersons} filter={filter}
        setSuccessMsg={setSuccessMsg} setErrorMsg={setErrorMsg}
      />
    </div>
  )

}

export default App
