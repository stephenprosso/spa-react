import React from 'react'
import { ArtistList } from '../data/artist-data';
import { Link } from 'react-router-dom';
const Artists = (props) => {

    let artists = ArtistList.map((person) => {
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
                {artists}

            </div>
        </div>
    );
};

export default Artists
