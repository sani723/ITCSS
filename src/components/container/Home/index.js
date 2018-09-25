// @flow

import React from 'react';
import Movie from '../Movie';

type HomeProps = {
    data: Object
}
const movieImages = [
    'http://www.gstatic.com/tv/thumb/v22vodart/23069/p23069_v_v8_am.jpg',
    'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
    'https://resizing.flixster.com/__DUnu4jz4gIKtzq0Ng6US_027k=/206x305/v1.bTsxMTM3MjQ0ODtqOzE3OTA2OzEyMDA7MTE5MTsxNTg4',
    'http://static.tvtropes.org/pmwiki/pub/images/fight-club.jpg',
    'https://www.barakashop.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/fight_club_poster.jpg',
    'https://img.posterlounge.co.uk/images/wbig/poster-fight-club-movie-scene-art-1722376.jpg'
];



class Home extends React.Component<HomeProps, {}> {
    
    render() {
        const {data} = this.props;
        return (
                <div className="App">
                    <Movie posters={movieImages} movie={data}  />
                    <div style={{height: "400px"}}></div>
                </div>
        );
    }
}

export default Home;
