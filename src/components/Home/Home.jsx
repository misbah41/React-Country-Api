
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [countries, setCountries] = useState([]);


  useEffect(()=>{
    const url = `https://restcountries.eu/rest/v2/all`;
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => alert('Something Went Wrong Please Try Again Later'));

  }, [])

  return (
    <div className='row justify-content-center'>
      {
      countries.map(country =>  <div className="col-sm-4"> <Country country={country} key={country.alpha2Code} />  </div> )
      }
    </div>
  );
};

export default Home;


