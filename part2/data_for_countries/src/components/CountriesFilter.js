const CountriesFilter = ({ setFilter }) => {
  const inputChangeHandler = (event) => {
    setFilter(event.target.value)
  };

  return (
    <>
      find countries <input onChange={inputChangeHandler}></input>
    </>
  )
}

export default CountriesFilter
