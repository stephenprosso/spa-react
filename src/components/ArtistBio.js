import React from 'react'

import { Link } from 'react-router-dom';
const ArtistBio = (props) => {


    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                <div className="image-profile"></div>
                <h2>{props.titleName}</h2>
                <p>{props.descrip}</p>


            </div>
        </div>
    );
};

export default ArtistBio
