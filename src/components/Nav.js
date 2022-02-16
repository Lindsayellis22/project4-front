import React from 'react';
import styled from 'styled-components';

function Nav(props) {
    return (
    <NavWrapper>
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Adoptable Pets</a></li>
            <li><a href="badges.html">My Pets</a></li>
        </ul>
    </NavWrapper>
    );
}

export default Nav;

const NavWrapper = styled.div`
font-family: 'Special Elite', cursive;
`