import React from 'react'
import { ArtistList } from '../data/artist-data';
import { Route } from 'react-router-dom'
import Artists from './Artists';
import ArtistBio from './ArtistBio';

const ArtistContainer = (props) => {
    let artistUrl = ArtistList.map((artist) => {
        return (
            <div>
                {/* The prop you put into the render function below needs to match your data. */}
                <Route path={`/Artists/${artist.url}`} render={() => <ArtistBio name={artist.name} details={artist.description} image={artist.profile_img}/>} />
            </div>
        );
    });
    return (
        <div>
            <Route exact path="/Artists" render={() => <Artists title="Previous Artists" />} />
            {artistUrl}
        </div>
    );
};

export default ArtistContainer;
