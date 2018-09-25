import React from 'react';
import {NavLink} from 'react-router-dom';

class Cast extends React.Component {
    render() {
        const {actors} = this.props;
        const actorsList = actors.split(','); 
        const imgPath = "https://specials-images.forbesimg.com/imageserve/5776a952a7ea436bd18c1204/416x416.jpg?background=000000&cropX1=150&cropX2=543&cropY1=24&cropY2=417";
        return (
            <div className="container">
            {actorsList &&
                actorsList.map(actor => {
                    return (
                        <NavLink key={actor} to="/cast/bradd-pitt">
                            <div className="cast">
                                <div className="cast__thumb">
                                    <img src={imgPath} alt={actor} />
                                </div>
                                <div className="cast__name">
                                    {actor}
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
            </div>
        );
    }
}


export default Cast;