import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Radclyf from "./Radclyf.js";
import { Link } from "react-router-dom";
import Squiggle from "./Squiggle.js";
import Edgar from "./Edgar.js";
import Dustsprite from "./Dustsprite.js";
import Footer from "./Footer";

function Home(props) {
  const [speciesList, setSpeciesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hidden-everglades-11083.herokuapp.com/species")
      .then((res) => res.json())
      .then((res) => {
        setSpeciesList(res);
        setLoading(false);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Heading>Welcome to L337 Pets!</Heading>
      <StyledP>
        Have you ever wanted your very own pet but can't afford the vet bills?
        Never fear, L337 Pets to the rescue! These cute little pets are free,
        clean, and loyal until the end. Just click on a pet below to learn more
        about them and should you choose to adopt, give your pet a color and a
        name! Adopt as many pets as you want and view them in the "My Pets" tab.
        Enjoy!
      </StyledP>
      <SpeciesList>
        {speciesList.map((species) => (
          <StyledLink to={`/species/${species._id}`} key={species._id}>
            <SpeciesListItem>
              <SpeciesContainer>
                {species.speciesName === "Edgar Allan Poe" && (
                  <Edgar color={species.defaultColor} />
                )}
                {species.speciesName === "Squiggle" && (
                  <Squiggle color={species.defaultColor} />
                )}
                {species.speciesName === "Radclyf" && (
                  <Radclyf color={species.defaultColor} />
                )}
                {species.speciesName === "Dustsprite" && (
                  <Dustsprite color={species.defaultColor} />
                )}
              </SpeciesContainer>
              <LinkText>{species.speciesName}</LinkText>
            </SpeciesListItem>
          </StyledLink>
        ))}
      </SpeciesList>
      <Footer />
    </>
  );
}

// https://codepen.io/ashleynolan/pen/mdxBpZ helped me create my pets

const SpeciesContainer = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
`;

const Heading = styled.h1`
  color: #000814;
`;

const SpeciesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const LinkText = styled.p`
  color: #000814;
`;

const StyledP = styled.p`
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SpeciesListItem = styled.li`
  padding: 10px;
  border-radius: 6px;
  border-color: gray;
  background-color: white;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default Home;
