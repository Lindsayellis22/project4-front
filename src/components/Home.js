import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Radclyf from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Radclyf.js';
import { Link } from 'react-router-dom';
import Squiggle from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Squiggle.js'
import Edgar from '/Users/lindsayellis/SEI/projects/project4-frontend/src/components/Edgar.js';

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
                <TestHeading>adopt pets!</TestHeading>
                <SpeciesList>
                    {speciesList.map(species => (
                        <StyledLink to={`/species/${species._id}`} key={species._id}>
                            <SpeciesListItem >
                                <SpeciesContainer>
                                {species.speciesName === 'Edgar Allen Poe' && <Edgar color={species.defaultColor} />}
                                    {species.speciesName === 'Squiggle' && <Squiggle color={species.defaultColor} />}
                                    {species.speciesName === 'Radclyf' && <Radclyf color={species.defaultColor} />}
                                </SpeciesContainer>
                                <LinkText>{species.speciesName}</LinkText>
                            </SpeciesListItem>
                        </StyledLink>
                    ))}
                </SpeciesList>
        </div>
    );
}

const SpeciesContainer = styled.div`
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
const LinkText = styled.p`
    color: #000814;
`
const StyledLink = styled(Link)`
    text-decoration: none;
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

export default Home;


