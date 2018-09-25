import React from 'react';
import Social from '../../container/Social';
import Nav from '../../container/Nav';

const formatTime = runTime => {
    var minutes = runTime % 60;
    var hours = (runTime - minutes) / 60; 
    return `${hours}h ${minutes}m`;
}

const Header = ({title,year,genre,time}) => (
    <header>
        
            <div className="movie">
                <div>
                    <h1 className="movie__title">{title}</h1>
                    <h2 className="movie__meta">{year} . {genre} . {formatTime(parseInt(time, 10))}</h2>
                </div>
                <Social />
            </div>
            <Nav />
        
        
    </header>
);


export default Header;