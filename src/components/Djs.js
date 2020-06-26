import React from 'react'
import { ArtistList } from '../data/artists';
const Djs = (props) => {

    let djs = ArtistList.map((person) => {
        return (
            <div>
                <div className="artist-container">
                    <a>
                        <div className="actor-image"></div>
                    </a>
                    <h3>{person.name}</h3>
                </div>
            </div>
        );
    });
    return (
        <div className="main-content">
            <div className="container">
                <h2>{this.props.title}</h2>

            </div>
        </div>
    );
};

export default Djs
