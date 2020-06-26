import React from 'react';

const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><a className="nav-menu_link" href="#">Home</a></li>
            <li><a className="nav-menu_link" href="#">Actors</a></li>
            <li><a className="nav-menu_link" href="#">Actress</a></li>
            <li><a className="nav-menu_link" href="#">Films</a></li>
        </ul>
    </nav>
);

export default Navbar