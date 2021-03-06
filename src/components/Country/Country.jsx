
import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
const Country = (props) => {
  const { name, region, flag, capital } = props.country;
  
  return (
    <div className=' card text-center p-3 mt-3'>
      <div className="flagBox">
        <img src={flag} alt="" />
      </div>
      <div className="countryContent">
        <h3>{name}</h3>
        <h5>Capital : {capital}</h5>
        <p>Region : {region}</p>
        {/* <button className="btn btn-primary">Country Detail</button> */}
        <Link to={`/country/${name}`} className="btn btn-primary">Country Detail</Link>
      </div>
    </div>
  );
};

export default Country;





