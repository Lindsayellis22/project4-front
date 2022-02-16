import React from 'react';
import styled from 'styled-components';

function Nav(props) {
    return (
    <NavWrapper>
        <NavTitle>L337Pets</NavTitle>
        <NavList>
            <li>My Pets</li>
        </NavList>
    </NavWrapper>
    );
}

export default Nav;

const NavWrapper = styled.div`
display: flex;
flex-direction: row;
font-family: 'Special Elite', cursive;
`
const NavList = styled.ul`
list-style-type: none;
text-decoration: none;
display: flex;
font-size: 20px;
`
const NavTitle = styled.header`
font-weight: bold;
display: felx;
flex-direction: row;
font-size: 40px;
`