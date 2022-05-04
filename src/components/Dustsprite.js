import React from "react";
import styled from "styled-components";

function Dustsprite(props) {
  return (
    <StyledDiv>
      <Body color={props.color}></Body>
      <RightEye></RightEye>
      <LeftEye></LeftEye>
      <LeftCheek></LeftCheek>
      <RightCheek></RightCheek>
      <Mouth></Mouth>
      <Nose></Nose>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Body = styled.div`
  position: absolute;
  top: 16%;
  left: 25%;
  width: 60%;
  height: 60%;
  background: ${(props) => props.color};
  border-radius: 20%;
  z-index: 3;
`;

const RightEye = styled.div`
  position: absolute;
  background: black;
  border-radius: 50%;
  top: 25%;
  right: 32%;
  width: 5%;
  height: 7%;
  z-index: 3;
  border: white 6px solid;
  animation: blink 2.4s infinite;
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
`;

const LeftEye = styled.div`
  position: absolute;
  background: black;
  border-radius: 50%;
  top: 25%;
  left: 45%;
  width: 5%;
  height: 7%;
  z-index: 3;
  border: white 6px solid;
  animation: blink 2.4s infinite;
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
    `;

const LeftCheek = styled.div`
  position: absolute;
  border-radius: 50%;
  background: pink;
  z-index: 3;
  width: 9%;
  height: 5%;
  left: 60%;
  top: 37%;
`;

const RightCheek = styled.div`
  position: absolute;
  border-radius: 50%;
  background: pink;
  z-index: 3;
  width: 9%;
  height: 5%;
  right: 48%;
  top: 37%;
`;

const Mouth = styled.div`
  position: absolute;
  bottom: 47%;
  right: 41%;
  width: 7%;
  height: 4%;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  background: red;
  z-index: 3;
`;

const Nose = styled.div`
  position: absolute;
  height: 3%;
  width: 5%;
  border-radius: 40%;
  background: black;
  z-index: 100;
  bottom: 53%;
  right: 42%;
`;

export default Dustsprite;
