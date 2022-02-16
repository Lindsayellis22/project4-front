import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js';

function AdoptedPets(props) {
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3111/pets`)
            .then((res) => res.json())
            .then((res) => {
                setPet(res);
                setLoading(false);
                console.log(res)
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[]);

        if (loading) {return <h1>Loading...</h1>};

    return (
        <SpeciesList>
        {pet.map(pets => (
                <SpeciesListItem >
                    <PetsContainer>
                        {pets.species_id === '620c2fa9d7fd58ae0f3c409e' && <Squiggle color={pets.color} />}
                        {pets.species_id === '620c2fa9d7fd58ae0f3c409f' && <Radclyf color={pets.color} />}
                    </PetsContainer>
                    <DisplayPets>
                        {pets.name}
                    </DisplayPets>
                </SpeciesListItem>
        ))}
    </SpeciesList>

);
}

const PetsContainer = styled.div`
    height: 200px;
    width: 200px;
    position: relative;
`

const TestHeading = styled.h1`
    color: #000814;
    font-family: 'Special Elite', cursive;
`
const SpeciesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`
const DisplayPets = styled.p`
    color: #000814;
`
const SpeciesListItem = styled.li`
    padding: 10px;
    border-radius: 6px;
    border-color: gray;
    background-color: white;
    margin-right: 5px;
    margin-left: 5px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
    

export default AdoptedPets;