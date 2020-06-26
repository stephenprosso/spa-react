import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = (props) => (
    <nav>
        <h2 className="logo"><a className="logo-link">{props.title}</a></h2>
        <ul className="nav-menu">
            <li><Link className="nav-menu_link" to="/">Home</Link></li>
            <li><Link className="nav-menu_link" to="/Djs">DJs</Link></li>
             <li><Link className="nav-menu_link" to="/Technodjs" text="Techno">Techno DJs</Link></li>
            <li><Link className="nav-menu_link" to="/Events">Events</Link></li>
        </ul>
    </nav>
);

export default Navbar