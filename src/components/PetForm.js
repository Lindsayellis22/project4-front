import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PetForm(props) {
    const [pet, setPets] = useState({
    name: '',
    color: '',
});

    const handleChange = (event) => {
		event.preventDefault();
		setPets({ ...pet, [event.target.id]: event.target.value });
	};

    const handleSubmit = (event) => {
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
        <form onSubmit={handleSubmit} className='create-form'>
			<label htmlFor='flavor'>Name: </label>
			<input
				onChange={handleChange}
				id='name'
				value={pet.name}
				placeholder='Pet'
			/>
			<label htmlFor='varieties'>Color: </label>
			<input
				onChange={handleChange}
				id='color'
				value={pet.color}
				placeholder='Color'
			/>
			<button type='submit'>Submit</button>
		</form>
    );    
}

export default PetForm;