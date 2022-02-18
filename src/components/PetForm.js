import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const COLOR_ARRAY = ['aquamarine', 'cornflowerblue', 'tomato', 'transparent', 'thistle', 'lemonchiffon', 'hotpink', '	darkseagreen', 'lawngreen', 'salmon', 'violet', 'palevioletred', 'orange', 'navy', 'darkslategray'];

const PetForm = (props) => {
    let navigate = useNavigate();
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
        fetch('https://hidden-everglades-11083.herokuapp.com/pets', {
          method: 'POST',
          body: JSON.stringify(pet),
          headers: {
              // heads up that the backend is about to receive JSON data
              'Content-Type': 'application/json',
          },
        })
        .then((res) => {
            return res.json();
        })
        .then(() => navigate('/pets'));
    }

    return (
      <DivForm onSubmit={handleSubmit}>
        <Field>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            onChange={handleChange}
            id='name'
            value={pet.name}
            placeholder='Pet Name'
          />
        </Field>
        <Field>
          <label htmlFor='color'>Choose a Color: </label>
          <select value={props.color} id='color' placeholder='Color' onChange={handleChange}> 
            <option value={'0'} disabled>
              Color 
            </option>
            {COLOR_ARRAY.map((color) => {
              return (
                <option value={color} key={color}>{color}</option>
              )
            })}
          </select>
        </Field>
        <StyledButton type='submit'>Submit</StyledButton>
      </DivForm>
    );    
 }

const DivForm = styled.form`
  padding-bottom: 25px;
  font-size: 20px;
`
const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  background-color: #551a8b;
  border-color: #551a8b;
  display: block;
  font-size: 20px;
  curser: pointer;
`
const Field = styled.div`
  display: block;
  margin-bottom: 10px;
`

export default PetForm;