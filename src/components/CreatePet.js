import React from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PetForm from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/PetForm.js'
import { useParams } from 'react-router-dom';

// const RADCLYF_ID = '620801bcd7fd58ae0f5da2ba';

function CreatePet(props) {
    let { id } = useParams();

    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3111/species/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setSpecies(res);
                setColor(res.defaultColor);
                setLoading(false);
                console.log(res)
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[id]);
      
        if (loading) {return <h1>Loading...</h1>};
    return (
        <div>
            {/* TO DO: CONDITION FOR SHOWING PET SPECIES */}
            <Radclyf color={color} />
            <PetForm speciesId={id} setColor={setColor} />
        </div>
    );
}



export default CreatePet;