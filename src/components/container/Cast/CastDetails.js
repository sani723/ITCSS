import React from 'react';
import { connect } from 'react-redux';
import { fetchCastFromAPI } from '../../../store/actions/cast';
import Loading from '../../ui/Loading';

class CastDetails extends React.Component {

    componentDidMount() {
        const {name} = this.props.match.params;
        this.props.dispatch( fetchCastFromAPI(name) );
    }

    render() {
        const {cast} = this.props.cast;
        
        if(this.props.cast.isFetching) {
            return <Loading />
        }
        
        return (
            <React.Fragment>
                <div className="cast-gallery">
                    {cast && cast.gallery.map( (pic, index) =>(
                        <div key={index} className="cast-gallery__item"><img src={pic} alt={cast.title} /></div>
                    ))}
                </div>
                <div className="cast-title">
                    <h2 className="cast__name">{cast.title}</h2>
                    <span>{cast.genre}</span>            
                </div>
                <div className="container cast__meta">
                        <div className="cast__meta-item">{cast.description}</div>
                        <div className="cast__meta-item">
                            <span>Born :</span>
                            <span className="value">{cast.born}</span>
                        </div>
                        <div className="cast__meta-item">
                            <span>Height :</span>
                            <span className="value">{cast.height}</span>
                        </div>
                        <div className="cast__meta-item">
                            <span>Net worth :</span>
                            <span className="value">{cast.netWorth}</span>
                        </div>
                        <div className="cast__meta-item">
                            <span>Born :</span>
                            <span className="value">{cast.born}</span>
                        </div>
                </div>
                <div style={{height: "400px"}}></div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    const cast = state.cast;
    return {
        cast
    }
}

export default connect(mapStateToProps)(CastDetails);