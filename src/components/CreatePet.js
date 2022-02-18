import React from 'react';
import Squiggle from './Squiggle.js';
import { useEffect, useState } from 'react';
import PetForm from './PetForm.js'
import { useParams } from 'react-router';
import Radclyf from './Radclyf.js';
import Edgar from './Edgar';
import styled from 'styled-components';
import Dustsprite from './Dustsprite';

function CreatePet(props) {
    const { id } = useParams();
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');


    useEffect(() => {
        fetch(`https://hidden-everglades-11083.herokuapp.com/species/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setSpecies(res);
                setColor(res.defaultColor);
                setLoading(false);
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[id]);
        
    if (loading) {
        return <h1>Loading...</h1>
    };
    return (
        <div>
            <h1>{species.speciesName}</h1>
            <PetBio>
                <LiItem>Likes: {species.likes}</LiItem>
                <LiItem>Dislikes: {species.dislikes}</LiItem>
                <LiItem>Temperament: {species.temperament}</LiItem>
            </PetBio>
            <SpeciesCard>
                <SpeciesContainer>
                    {species._id === '620e79f32f4ae96d579ee873' && <Squiggle color={color} />}
                    {species._id === '620e79f32f4ae96d579ee874' && <Radclyf color={color} />}
                    {species._id === '620e79f32f4ae96d579ee875' && <Edgar color={color} />}
                    {species._id === '620e79f32f4ae96d579ee876' && <Dustsprite color={color} />}
                </SpeciesContainer>
            </SpeciesCard> 
            <PetForm speciesId={id} setColor={setColor} /> 
        </div> 
    )
}

const SpeciesContainer = styled.div`
    height: 100%;
    width: 100%;
`
const SpeciesCard = styled.div`
    padding: 10px;
    border-radius: 6px;
    border-color: gray;
    background-color: white;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const LiItem = styled.li`
    font-size: 20px;
`

const PetBio = styled.ul`
    list-style: none;
    padding: 0;
`

export default CreatePet;

