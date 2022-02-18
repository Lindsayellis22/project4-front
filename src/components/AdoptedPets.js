import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Squiggle from './Squiggle.js';
import Radclyf from './Radclyf.js';
import Edgar from './Edgar';

function AdoptedPets(props) {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetch(`https://hidden-everglades-11083.herokuapp.com/pets`)
            .then((res) => res.json())
            .then((res) => {
                setPets(res);
                setLoading(false);
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[]);

    if (loading) {return <h1>Loading...</h1>};

    return (
        <>
            <StyledTitle>My Pets</StyledTitle>
            <PetsList>
                {pets.map(pet => (
                    <PetsListItem key={pet._id} >
                        <PetsContainer>
                            {pet.species_id === '620c2fa9d7fd58ae0f3c40a0' && <Edgar color={pet.color} />}
                            {pet.species_id === '620e79f32f4ae96d579ee873' && <Squiggle color={pet.color} />}
                            {pet.species_id === '620e79f32f4ae96d579ee874' && <Radclyf color={pet.color} />}
                        </PetsContainer>
                        <DisplayPets>
                            {pet.name}
                        </DisplayPets>
                    </PetsListItem>
                ))}
            </PetsList>
        </>
    );
}

const PetsContainer = styled.div`
    height: 300px;
    width: 300px;
    position: relative;
`
const PetsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const DisplayPets = styled.p`
    color: #000814;
`
const PetsListItem = styled.li`
    padding: 10px;
    border-radius: 6px;
    border-color: gray;
    background-color: white;
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`
const StyledTitle = styled.h1`
    margin-bottom: 25px;
`

export default AdoptedPets;