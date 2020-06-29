import React from 'react'
import { ArtistList } from '../data/artist-data';
import { Route } from 'react-router-dom'
import Artists from './Artists';
const ArtistContainer = (props) => {

    let artistUrl = ArtistList.map((artist) => {   
        return (
        <Route path={`/Artists/${artist.url}`} render = {() => <Artists />} />
        );  
    });
       return (
        {artistUrl}

       );
};

export default ArtistContainer;
