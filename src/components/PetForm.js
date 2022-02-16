import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const COLOR_ARRAY = ['papayawhip', 'lemonchiffon', 'hotpink'];

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
        fetch('http://localhost:3111/pets', {
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
      <div>
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
          <select value={props.color} id='color' onChange={handleChange}> 
            <option value='default' disabled hidden>
              Color 
            </option>
              {COLOR_ARRAY.map((color) => {
                return (
            <option value={color} key={color}>{color}</option>
                )
              })}
          </select>
          <Link to={'/pets'}>
            <button type='submit'>Submit</button>
          </Link>
        </form>
    </div>
    );    
 }



export default PetForm;