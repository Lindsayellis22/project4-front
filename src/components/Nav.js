import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'animate.css';

function Nav(props) {
    return (
        <NavWrapper>
            <LinkHome to={'/'}>
                <NavTitle><h1 class="animate__animated animate__wobble">L337Pets</h1></NavTitle>
            </LinkHome>
            <LinkAdopted to={'/pets'}>
                <NavList><li>My Pets</li></NavList>
            </LinkAdopted>
        </NavWrapper>
    );
}

export default Nav;

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Righteous', cursive;
`
const NavList = styled.ul`
    list-style-type: none;
    text-decoration: none;
    display: flex;
    font-size: 20px;
`
const LinkHome = styled(Link)`
    text-decoration: none;
`
const LinkAdopted = styled(Link)`
    text-decoration: none;
`
const NavTitle = styled.header`
    font-weight: bold;
    display: felx;
    flex-direction: row;
    font-size: 30px;
    text-decoration: none;
`