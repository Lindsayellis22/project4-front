import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js';
import { Link } from 'react-router-dom';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'


function Home(props) {   
    const [speciesList, setSpeciesList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        
        fetch('http://localhost:3111/species')
            .then((res) => res.json())
            .then((res) => {
                setSpeciesList(res);
                setLoading(false);
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
    }, []);
      
        if (loading) {return <h1>Loading...</h1>};

    return (
        <div>
            <TestHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam dolorum corrupti consectetur sunt temporibus suscipit doloribus debitis, fugit nobis ipsa, omnis quas qui dignissimos dolorem! Voluptate possimus consectetur officiis!</TestHeading>
            <SpeciesList>
                {speciesList.map(species => (
                    <Link to={`/species/${species._id}`}>
                        <SpeciesListItem key={species._id}>
                            {species.speciesName}
                            {species.speciesName === 'Radclyf' && <Radclyf color={species.defaultColor} />}
                            {species.speciesName === 'Squiggle' && <Squiggle color={species.defaultColor} />}
                        </SpeciesListItem>
                    </Link>
                ))}
            </SpeciesList>
        </div>
    );
}

const TestHeading = styled.h1`
    font-color: red
    font-family: 'Special Elite', cursive;
`

const SpeciesList = styled.ul`
    display: grid;
    margin: 0;
    norder-radius: 5px;
    padding: 20px;
    font-size 150%
`
const SpeciesListItem = styled.li`
    display: flex;
    font-family: 'Special Elite', cursive;
    border: 4px solid black;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
    width: 320px;
`

export default Home;