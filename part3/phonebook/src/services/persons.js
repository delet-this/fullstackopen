import axios from 'axios'

// const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = '/api/persons'

const add = newPerson =>
  axios.post(baseUrl, newPerson)
    .then(response => response.data)

const update = (changedPerson) =>
  axios.put(`${baseUrl}/${changedPerson.id}`, changedPerson)
    .then(response => response.data)

const remove = id =>
  axios.delete(`${baseUrl}/${id}`)

const getAll = () =>
  axios.get(baseUrl)

const persons = {
  getAll, add, remove, update
}

export default persons
