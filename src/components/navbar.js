import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-menu_link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu_link" exact to="/Artists">Artists</NavLink></li>
            {/* <li><NavLink className="nav-menu_link" exact to="/Events">Events</NavLink></li> */}

        </ul>
    </nav>
);

export default Navbar