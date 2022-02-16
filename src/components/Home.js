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
                <TestHeading>adopt pets!</TestHeading>
                <SpeciesList>
                    {speciesList.map(species => (
                        <Link to={`/species/${species._id}`} key={species._id}>
                            <SpeciesListItem >
                                <TestSpecies />
                                {species.speciesName}
                            </SpeciesListItem>
                        </Link>
                    ))}
                </SpeciesList>
        </div>
    );
}

const TestSpecies = styled.div`
    background-color: aqua;
    height: 100px;
    width: 100px;
`

const TestHeading = styled.h1`
    color: #003566;
    font-family: 'Special Elite', cursive;
`
const SpeciesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`
const SpeciesListItem = styled.li`
    padding: 10px;
    border-radius: 6px;
    border-color: gray;
    background-color: white;
    margin-right: 10px;
`
const HomeCard = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
	padding: 20px;
	margin-top: 50px;
	margin-left: 200px;
	margin-right: 200px;
`

export default Home;

// {species.speciesName === 'Radclyf' && <Radclyf color={species.defaultColor} />}
// {species.speciesName === 'Squiggle' && <Squiggle color={species.defaultColor} />}