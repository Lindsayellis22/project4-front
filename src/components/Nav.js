import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'animate.css';

function Nav(props) {
    return (
        <NavWrapper>
            <NavList>
                <StyledLink to={'/'}>
                    <NavTitle><StyledH1 className="animate__animated animate__wobble">L337Pets</StyledH1></NavTitle>
                </StyledLink>
                <StyledLink to={'/pets'}>
                    <li>My Pets</li>
                </StyledLink>
            </NavList>
        </NavWrapper>
    );
}

// logo code from https://animate.style/

export default Nav;

const NavWrapper = styled.nav`
    padding: 16px 48px;
    font-family: 'Righteous', cursive;
    @media (max-width: 768px) {
        padding: 16px;
    }
`
const NavList = styled.ul`
    list-style-type: none;
    text-decoration: none;
    display: flex;
    font-size: 20px;
    align-items: center;
    margin: 0;
    padding: 0;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
      color: #000814;
    }
`
const NavTitle = styled.li`
    font-size: 30px;
    margin-right: 60px;
`
const StyledH1 = styled.h1`
    margin: 0;
`
