import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js';
import { Link } from 'react-router-dom';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'


function Home(props) {   
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('default');

    useEffect(() => {
        
        fetch('http://localhost:3111/species')
            .then((res) => res.json())
            .then((res) => {
                setSpecies(res);
                setLoading(false);
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        }, []);
      
        if (loading) {return <h1>Loading...</h1>};

    return (
        
        <div>
        <Link to={`/species/620801bcd7fd58ae0f5da2ba`}><Radclyf /></Link>
        <Link to={`/species/620801bcd7fd58ae0f5da2b9`}><Squiggle /></Link>
            <TestHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam dolorum corrupti consectetur sunt temporibus suscipit doloribus debitis, fugit nobis ipsa, omnis quas qui dignissimos dolorem! Voluptate possimus consectetur officiis!</TestHeading>
            <ul>
                {species.map(speciespets => (
                    <li key={speciespets.id}>
                        {speciespets.speciesName} {speciespets.defaultColor}
                    </li>
                ))}
            </ul>
        </div>
    );
  }

const TestHeading = styled.h1`
    color: red
`

export default Home;