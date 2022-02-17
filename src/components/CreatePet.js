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
            <SpeciesContainer>
            {speciesList._id === '620c2fa9d7fd58ae0f3c409e' && <Squiggle color={color} />}
            {speciesList._id === '620c2fa9d7fd58ae0f3c409f' && <Radclyf color={color} />}
            {speciesList._id === '620c2fa9d7fd58ae0f3c40a0' && <Edgar color={color} />}
            </SpeciesContainer>
            <PetForm speciesId={id} setColor={setColor} />
            Likes: {speciesList.likes}
            Dislikes: {speciesList.dislikes}
            Temperament: {speciesList.temperament}
           </div> 


    )
    }

const SpeciesContainer = styled.div`
    width: 300px;
    height: 300px;
`

export default CreatePet;

