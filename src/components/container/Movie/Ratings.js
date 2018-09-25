import React from 'react';

class Ratings extends React.Component {

    abbreviateName = str => {
        var split_string = str.split(' ');
        var result = '';
        if(split_string.length > 2) {
            split_string.map(name => (
                result += name.charAt(0) + ''
            ));
            //return result;
        } else {
            //return str;
            result = str;
        }
        return result;
        
    }
    render() {
        const {ratings} = this.props;
        return (
                <div className="ratings border-bottom">
                    {
                        Object.keys(ratings).map(key => (
                            <div className="ratings__item" key={ratings[key]["Source"]}>
                                <span className="ratings__value">{ ratings[key]["Value"] }</span>
                                <span className="ratings__source">{ this.abbreviateName(ratings[key]["Source"]) }</span>
                            </div>
                        ))
                    }
                </div>
        );
    }
}

export default Ratings;