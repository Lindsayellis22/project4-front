import React from 'react';
import styled from 'styled-components';

function Squiggle(props) {
    return (
        <>
            <Head color={props.color}></Head>
            <RightEar color={props.color}></RightEar>
            <LeftEar color={props.color}></LeftEar>
            <RightInnerEar></RightInnerEar>
            <LeftInnerEar></LeftInnerEar>
            <Eye right></Eye>
            <Eye left></Eye>
            <Mouth></Mouth>
            <RightLeg color={props.color}></RightLeg>
            <LeftLeg color={props.color}></LeftLeg>
            <MiddleLeg right color={props.color}></MiddleLeg> 
            <MiddleLeg left color={props.color}></MiddleLeg>  
        </>
    );
}

const SquiggleContainer = styled.div`
  position: fixed;
  border: 4px solid rgb(204, 189, 189);
	background-color: var(--transparent-grey);
	margin: 1rem;
	margin-top: 30px;
	width: 91vw;
	padding: 5px;
	display: flex;
	align-content: center;
	flex-direction: column;
	overflow-x: hidden;    
`

const Head = styled.div`
    position: fixed;
    top: 16%;
    left: 25%;
    width: 50%;
    height: 60%;
    background: ${props => props.color};
    border-radius: 50%;
    z-index: 3;
  `
  
  const RightEar = styled.div`
    position: fixed;
    width: 10%;
    height: 25%;
    right: 25%;
    top: 5%;
    background: ${props => props.color};
    border-radius: 50%;
    transform: rotate(-160deg);
    z-index: 1;
   `

   const LeftEar = styled.div`
    position: fixed;
    width: 10%;
    height: 25%;
    left: 25%;
    top: 5%;
    background: ${props => props.color};
    border-radius: 50%;
    transform: rotate(160deg);
    z-index: 1;
   `
  
  const LeftInnerEar = styled.div`
    position: fixed;
    width: 7%;
    height: 12%;
    left: 25%;
    top: 10%;
    background: pink;
    border-radius: 50%;
    transform: rotate(160deg);
    z-index: 3;
  `

  const RightInnerEar = styled.div`
    position: fixed;
    width: 7%;
    height: 12%;
    right: 25%;
    top: 10%;
    background: pink;
    border-radius: 50%;
    transform: rotate(-160deg);
    z-index: 3;
  `
  
  const Eye = styled.div`
    position: fixed;
    top: 37%;
    ${props => props.left && 'left: 37%;'}
    ${props => props.right && 'right: 37%;'}
    width: 5%;
    height: 5%;
    background: black;
    border-radius: 50%;
    border: white 12px solid;
    animation: blink 2.4s infinite;
    z-index: 3;
  `
  
  const Mouth = styled.div`
    position: fixed;
    top: 55%;
    right: 45%;
    width: 10%;
    height: 10%;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    background: pink;
    z-index: 3;
  `
  
  const RightLeg = styled.div`
    position: fixed;
    width: 100px;
    height: 150px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 57%;
    right: 30%;
    transform: rotate(-20deg);
  `
  
  const LeftLeg = styled.div`
    position: fixed;
    width: 100px;
    height: 150px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 57%;
    left: 30%;
    transform: rotate(20deg);
  `
  
  const MiddleLeg = styled.div`
    position: fixed;
    width: 100px;
    height: 150px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 59%;
    ${props => props.left && 'left: 51%;'}
    ${props => props.right && 'right: 51%;'}
  `
  
  export default Squiggle;