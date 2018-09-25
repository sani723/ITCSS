import React from 'react';
import Slider from './Slider';
import Ratings from './Ratings';

class Movie extends React.Component {
    render() {
        const {posters, movie} = this.props;
        console.log(movie);
        return (
            <React.Fragment>
                <Slider posters={posters} />
                <div className="container">
                    <div className="content">
                        <Ratings ratings={movie.Ratings} />
                        <div className="movie__plot border-bottom">{movie.Plot}</div>
                        <div className="movie__detail">
                            <a href="https://www.imdb.com">More About This Movie</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Movie;