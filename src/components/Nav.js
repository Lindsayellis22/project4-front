import React from 'react';

function Nav(props) {
    return (
    <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Adoptable Pets</a></li>
            <li><a href="badges.html">My Pets</a></li>
            {/* <li><a href="collapsible.html">JavaScript</a></li> */}
        </ul>
    </div>
    );
}

export default Nav;