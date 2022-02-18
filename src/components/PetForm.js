import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const COLOR_ARRAY = ['aquamarine', 'cornflowerblue', 'lemonchiffon', 'hotpink', '	darkseagreen', 'lawngreen', 'salmon', 'violet', 'palevioletred', 'orange', 'navy', 'darkslategray'];

function PetForm(props) {
    const [pet, setPet] = useState({
        name: '',
        color: '',
        species_id: props.speciesId,
    });

    const handleChange = (event) => {
		event.preventDefault();
		setPet({ ...pet, [event.target.id]: event.target.value });
        if (event.target.id === 'color') {
            props.setColor(event.target.value);
        };
	  };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(pet)
        fetch('https://hidden-everglades-11083.herokuapp.com/pets', {
          method: 'POST',
          body: JSON.stringify(pet),
          headers: {
              // heads up that the backend is about to receive JSON data
              'Content-Type': 'application/json',
          },
        })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((res) => console.log(res));
    }

    return (
      <DivForm>
        <form onSubmit={handleSubmit} className='create-form'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            onChange={handleChange}
            id='name'
            value={pet.name}
            placeholder='Pet Name'
          />
          <label>Choose a Color:</label>
          <select value={props.color} id='color' placeholder='Color' onChange={handleChange}> 
            <option value='default' disabled hidden>
              Color 
            </option>
              {COLOR_ARRAY.map((color) => {
                return (
            <option value={color} key={color}>{color}</option>
                )
              })}
          </select>
          {/* <Link to={'/pets'}> */}
            <button type='submit'>Submit</button>
          
        </form>
    </DivForm>
    );    
 }

const DivForm = styled.div`
display: flex;
justify-content: flex-start;
padding-bottom: 25px;
`

export default PetForm;