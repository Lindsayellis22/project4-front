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
            <TestHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam dolorum corrupti consectetur sunt temporibus suscipit doloribus debitis, fugit nobis ipsa, omnis quas qui dignissimos dolorem! Voluptate possimus consectetur officiis!</TestHeading>
            <SpeciesList>
                {speciesList.map(species => (
                    <Link to={`/species/${species._id}`}>
                        <SpeciesListItem key={species._id}>
                            {species.speciesName}
                            {species.speciesName === 'Radclyf' && <Radclyf color={species.defaultColor} />}
                            {species.speciesName === 'Squiggle' && <Squiggle color={species.defaultColor} />}
                        </SpeciesListItem>
                    </Link>
                ))}
            </SpeciesList>
        </div>
    );
}

const TestHeading = styled.h1`
    color: red
`
const SpeciesCard = styled.div`
    poition: relative;  
    border: 4px solid rgb(204, 189, 189);
	background-color: var(--transparent-grey);
	margin: 1rem;
	margin-top: 30px;
	width: 91vw;
	padding: 5px;
	display: flex;
	align-content: center;
	flex-direction: column;
	overflow-x: hidden;
`
const SpeciesList = styled.ul`
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	padding-left: 1rem;
`
const SpeciesListItem = styled.li`
    list-style-type: none;
`

export default Home;