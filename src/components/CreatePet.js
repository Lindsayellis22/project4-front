import React from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js'
import { useEffect, useState } from 'react';
import PetForm from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/PetForm.js'
import { useParams } from 'react-router';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'
import Edgar from './Edgar';
import styled from 'styled-components';


function CreatePet(props) {
    const { id } = useParams();
    const [speciesList, setSpeciesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');


    useEffect(() => {
        fetch(`http://localhost:3111/species/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setSpeciesList(res);
                setColor(res.defaultColor);
                setLoading(false);
                console.log(res)
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[id]);
        
    if (loading) {return <h1>Loading...</h1>
    };
    
    return (
        <div>
            <SpeciesCard>
            <SpeciesContainer>
            {speciesList._id === '620c2fa9d7fd58ae0f3c409e' && <Squiggle color={color} />}
            {speciesList._id === '620c2fa9d7fd58ae0f3c409f' && <Radclyf color={color} />}
            {speciesList._id === '620c2fa9d7fd58ae0f3c40a0' && <Edgar color={color} />}
            </SpeciesContainer>
            </SpeciesCard>
            <PetForm speciesId={id} setColor={setColor} />
            Likes: {speciesList.likes}
            Dislikes: {speciesList.dislikes}
            Temperament: {speciesList.temperament}
           </div> 


    )
    }

const SpeciesContainer = styled.div`
    width: 500px;
    height: 500px;
    position: relative
`
const SpeciesCard = styled.div`
padding: 10px;
border-radius: 6px;
border-color: gray;
background-color: white;
margin-right: 5px;
margin-left: 5px;
width: 700px;
height: 700;
display: flex;
flex-direction: column;
align-items: center;
`
export default CreatePet;

