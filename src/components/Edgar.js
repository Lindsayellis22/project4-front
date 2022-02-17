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