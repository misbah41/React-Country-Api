
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState({});
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(error => alert('Something Went Wrong Please Try Again Later'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="card text-center p-3">
      <h3>{country.name}</h3>
      <h5>Capital : {country.capital}</h5>
      <p>Population : {country.population}</p>
      <p>Region : {country.region}</p>
      <p>Area : {country.area}</p>
    </div>
  );
};

export default CountryDetail;



