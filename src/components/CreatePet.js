import React from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js'
import { useEffect, useState } from 'react';
import PetForm from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/PetForm.js'
import { useParams } from 'react-router';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'



function CreatePet(props) {
    const { id } = useParams();
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
      
    if (loading) {return <h1>Loading...</h1>
    };
    // if (id === '620801bcd7fd58ae0f5da2ba')
    return (
        <h1>hi</h1>
    //     <div>
    //         <PetForm speciesId={id} setColor={setColor} />
    //         <Radclyf color={color} />
    //     </div>
    //     );
    // return (
    // <div>
    //     <PetForm speciesId={id} setColor={setColor} />
    //     <Squiggle color={color} />
    // </div> 
    // );         
    )}   

export default CreatePet