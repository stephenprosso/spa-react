import React from 'react'
import { ArtistList } from '../data/artist-data';
import { Link } from 'react-router-dom';
const Djs = (props) => {

    let djs = ArtistList.map((person) => {
        return (

            <div className="artist-container">
                <a>
                    <div className="actor-image" style={{ backgroundImage: "url(" + person.img_src + ")" }}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        );
    });
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="dj-container">
                {djs}

            </div>
        </div>
    );
};

export default Djs
