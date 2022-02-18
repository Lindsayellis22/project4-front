import React from 'react';
import styled from 'styled-components';

function Squiggle(props) {
    return (
        <StyledDiv>
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
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
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
  
  const RightEar = styled.div`
    position: absolute;
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
    position: absolute;
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
    position: absolute;
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
    position: absolute;
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
    position: absolute;
    top: 37%;
    ${props => props.left && 'left: 37%;'}
    ${props => props.right && 'right: 37%;'}
    width: 6%;
    height: 5%;
    background: black;
    border-radius: 50%;
    border: white 7px solid;
    animation: blink 2.4s infinite;
    z-index: 3;
    @keyframes blink {
      93% {
        transform: none;
        animation-timing-function: ease-in;
      }
      93% {
        transform: translateY(15px) scaleY(0)
      }
      100% {
        animation-timing-function: ease-out;
      }
    }
    @keyframes squeeze {
      80% {
        transform: none;
        animation-timing-function: ease-in;
      }
      93% {
        transform: translateY(3px) scaleY(0.8)
      }
      100% {
        animation-timing-function: ease-out;
      }
    }
    
    le    
`
  
  const Mouth = styled.div`
    position: absolute;
    top: 55%;
    right: 45%;
    width: 8%;
    height: 8%;
    border-bottom-left-radius: 500px;
    border-bottom-right-radius: 500px;
    background: pink;
    z-index: 3;
  `
  
  const RightLeg = styled.div`
    position: absolute;
    width: 40px;
    height: 70px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 60%;
    right: 35%;
    transform: rotate(-20deg);
  `
  
  const LeftLeg = styled.div`
    position: absolute;
    width: 40px;
    height: 70px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 60%;
    left: 35%;
    transform: rotate(20deg);
  `
  
  const MiddleLeg = styled.div`
    position: absolute;
    width: 40px;
    height: 70px;
    border-radius: 100px /50px;
    background: ${props => props.color};
    top: 65%;
    ${props => props.left && 'left: 51%;'}
    ${props => props.right && 'right: 51%;'}
  `
  
  export default Squiggle;