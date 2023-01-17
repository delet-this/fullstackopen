import axios from 'axios'
import { useEffect } from 'react'

const CountryInfo = ({ country, weather, setWeather }) => {
  const capital = country.capital[0]

  const kelvinToCelsius = kelvin => (
    kelvin - 273.15
  )

  const makeWeather = () => {
    // weather hasn't been fetched yet
    if (Object.keys(weather).length === 0) {
      return <></>
    }

    return (
      <>
        <h2>Weather in {capital}</h2>
        <p>temperature {kelvinToCelsius(weather.main.temp).toFixed(2)} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p>wind {weather.wind.speed} m/s</p>
      </>
    )
  }

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [capital, setWeather])

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>capital: {capital}</p>
      <p>area: {country.area}</p>
      <b>languages:</b>
      <ul>
        {Object.values(country.languages)
          .map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img
        src={country.flags.png}
        alt={country.name.common}
        width="150"
      />
      {makeWeather()}
    </>
  )
}

const CountryList = ({ countries, setFilter }) => (
  countries
    .map(country =>
      <p key={country.name.common}>
        {country.name.common}
        <button onClick={() => setFilter(country.name.common)}>
          show
        </button>
      </p>
    )
)

const Countries = ({ countries, filter, setFilter, weather, setWeather }) => {
  const makeCountries = () => {
    const filteredCountries =
      countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase()))

    // too many countries
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }

    // info about one country
    if (filteredCountries.length === 1) {
      return (
        <>
          <CountryInfo
            country={filteredCountries[0]}
            weather={weather} setWeather={setWeather} />
        </>
      )
    }

    // 10 or less results
    return (
      <>
        <CountryList
          countries={filteredCountries}
          setFilter={setFilter} />
      </>)
  }

  return (
    <>{makeCountries()}</>
  )
}

export default Countries
