import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js';
import { Link } from 'react-router-dom';


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

    // function handleSubmit(event) {
    //         event.preventDefault();
    //     }

    //     function handleChange(event) {
    //         setColor(event.target.value);
    //     }

    return (
        
        <div>
        <Link to='/species/id'><Radclyf /></Link>
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