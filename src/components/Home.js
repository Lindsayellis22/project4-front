import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useState, useEffect } from 'react';
// import Radclyf from './Radclyf';


const Home = props => {   
    const [pets, setPets] = useState([]);
    const [error, setError] = useState('[]');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const url = `http://localhost:3111/pets`;
    setLoading(true);
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setPets(res.results);
            console.log(res)
            setLoading(false);
        },
            (error) => {
                setLoading(false);
                setError(error);
              }
            )
        }, [])
      
        if (error) {
            return <div>Error: zomg!</div>;
          } else if (loading) {
            return <div>Loading...</div>;
          }

    return (
        <div>
            <TestHeading>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quam dolorum corrupti consectetur sunt temporibus suscipit doloribus debitis, fugit nobis ipsa, omnis quas qui dignissimos dolorem! Voluptate possimus consectetur officiis!</TestHeading>
            <ul>
                {pets.map(pet => (
                    <li key={pet.id}>
                        {pet.name} {pet.color}
                    </li>
                ))}
            </ul>
        </div>
    );
  }

            

const TestHeading = styled.h1`
    color: red
`

export default Home;