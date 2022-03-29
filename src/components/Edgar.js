import React from 'react';
import Poe from '../assets/Poe.jpeg';
import styled from 'styled-components';

function Edgar(props) {
    return (
        <StyledDiv>
            <Overlay color={props.color}></Overlay>
            <EdgarPic img src={Poe} alt='hiii' />
        </StyledDiv>
            
    );      
};

export default Edgar;

const EdgarPic = styled.img`
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`
const StyledDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color};
    opacity: 0.5;
    height: 100%;
    width: 100%;
    z-index: 1;
`

//Edgar Allen Poe photo from: https://www.nps.gov/people/edgarallanpoe.htm
// used stackoverflow for overlay help
// https://stackoverflow.com/questions/17859993/basic-css-how-to-overlay-a-div-with-semi-transparent-div-on-top