import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Card';

const Countries = () => {
     
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,capital,population,flag'
        )
        .then((res) => setData(res.data));

    }, []);

   
    return (
        <div className="countries">
            <div className="sort-containers">
                <input type="range" min="1" max="250" />
            </div>
            <ul className ="countries-list">
                {
                    data.map((country) => (
                        <Cards country={country}   key={country.name} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;