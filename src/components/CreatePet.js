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
        fetch(`https://hidden-everglades-11083.herokuapp.com/species/${id}`)
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
            <PetForm speciesId={id} setColor={setColor} />
                <SpeciesCard>
                    <SpeciesContainer>
                        {speciesList._id === '620e79f32f4ae96d579ee873' && <Squiggle color={color} />}
                        {speciesList._id === '620e79f32f4ae96d579ee874' && <Radclyf color={color} />}
                        {speciesList._id === '620e79f32f4ae96d579ee875' && <Edgar color={color} />}
                        <PetBio>
                            <LiItem>Likes: {speciesList.likes}</LiItem>
                            <LiItem>Dislikes: {speciesList.dislikes}</LiItem>
                            <LiItem>Temperament: {speciesList.temperament}</LiItem>
                        </PetBio>
                </SpeciesContainer>
            </SpeciesCard>  
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
    flex-wrap: wrap;
    align-items: baseline;
`

const LiItem = styled.li`
    // display flex:
    // flex-direction: column;
    // text-align: center;
    padding-bottom: 7px;
    float: right;
    display: table-cell;
    // vertical-align: middle;
    font-size: 25px;
`

const PetBio = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    vertical-align: top;
`



export default CreatePet;

