import React from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Radclyf.js'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
// import PetForm from '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/PetForm.js'

function RadclyfPage(props) {
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState('');
    useEffect(() => {
        fetch('http://localhost:3111/species/620801bcd7fd58ae0f5da2ba')
            .then((res) => res.json())
            .then((res) => {
                setSpecies(res);
                setColor(species.defaultColor)
                setLoading(false);
                console.log(res)
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        }, []);
      
        if (loading) {return <h1>Loading...</h1>};
    return (
        <div>
            
            <Radclyf color={color} />
            {/* <PetForm /> */}
            
        </div>
    );
}



export default RadclyfPage;