import { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesFilter from './components/CountriesFilter'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <CountriesFilter setFilter={setFilter} />

      <Countries 
        countries={countries} filter={filter} setFilter={setFilter} 
        weather={weather} setWeather={setWeather}/>
    </div>
  );
}

export default App;
