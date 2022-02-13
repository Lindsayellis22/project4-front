import React from 'react';
import styled from 'styled-components';

function Radclyf(props) {
    return (
        <RadclyfContainer>
            <Head color={props.color}></Head>
            <Ear left color={props.color}></Ear>
            <Ear right color={props.color}></Ear>
            <Eye right></Eye>
            <Eye left></Eye>   
        </RadclyfContainer>
    );
}

const RadclyfContainer = styled.div`
    
`

const Head = styled.div`
    position: absolute;
    top: 16%;
    left: 25%;
    width: 50%;
    height: 60%;
    background: ${props => props.color};
    border-radius: 50%;
    z-index: 3;
`

const Ear = styled.div`
    position: absolute;
    top: 4%;
    ${props => props.left && 'left: 18%;'}
    ${props => props.right && 'right: 18%;'}
    width: 15%;
    height: 30%;
    background: ${props => props.color};
    border-radius: 40%;
    z-index: 1;
`
const Eye = styled.div`
    position: absolute;
    top: 37%;
    ${props => props.left && 'left: 30%;'}
    ${props => props.right && 'right: 30%;'}
    width: 14%;
    height: 16%;
    background: black;
    border-radius: 50%;
    border: white 7px solid;
    z-index: 3;
`

export default Radclyf;