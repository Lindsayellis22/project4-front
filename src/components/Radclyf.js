import React from "react";
import styled from "styled-components";

function Radclyf(props) {
  return (
    <StyledDiv>
      <Head color={props.color}></Head>
      <Ear left color={props.color}></Ear>
      <Ear right color={props.color}></Ear>
      <Eye right></Eye>
      <Eye left></Eye>
      <Mouth></Mouth>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Head = styled.div`
  position: absolute;
  top: 16%;
  left: 25%;
  width: 50%;
  height: 60%;
  background: ${(props) => props.color};
  border-radius: 50%;
  z-index: 3;
`;

const Ear = styled.div`
  position: absolute;
  top: 4%;
  ${(props) => props.left && "left: 18%;"}
  ${(props) => props.right && "right: 18%;"}
    width: 15%;
  height: 30%;
  background: ${(props) => props.color};
  border-radius: 40%;
  z-index: 1;
`;
const Eye = styled.div`
    position: absolute;
    top: 37%;
    ${(props) => props.left && "left: 35%;"}
    ${(props) => props.right && "right: 35%;"}
    width: 8%;
    height: 10%;
    background: black;
    border-radius: 50%;
    border: white 5px solid;
    z-index: 100;
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

const Mouth = styled.div`
  position: absolute;
  top: 60%;
  right: 46%;
  width: 8%;
  height: 5%;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
  background: red;
  z-index: 3;
`;

export default Radclyf;
