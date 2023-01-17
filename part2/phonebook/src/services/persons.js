import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const add = newPerson =>
  axios.post(baseUrl, newPerson)
    .then(response => response.data)

const remove = id =>
  axios.delete(`${baseUrl}/${id}`)

const persons = {
  add, remove
}

export default persons
