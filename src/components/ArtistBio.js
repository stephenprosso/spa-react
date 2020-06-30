import React from 'react'

import { Link } from 'react-router-dom';
const ArtistBio = (props) => {


    return (
        <div className="main-content">
            <div><Link className="back" to="/Artists">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                {/* the prop you access below needs to match the name of the prop passed in the function */}
                <div className="image-profile" style={{ backgroundImage: "url(" + props.image + ")"}}></div>
                <h2>{props.name}</h2>
                <p>{props.details}</p>


            </div>
        </div>
    );
};

export default ArtistBio
