import React from 'react';
import { useEffect, useState } from 'react';

function AdoptedPets(props) {
    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:3111/species/pets`)
            .then((res) => res.json())
            .then((res) => {
                setPet(res);
                setLoading(false);
                console.log(res)
            }).catch((err) => console.error(`Oops, something went wrong: ${err}`));
        },[]);
    return (

        <div>
            
        </div>
    );
}

export default AdoptedPets;