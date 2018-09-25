import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import '../../assets/css/main.scss';
import { connect } from 'react-redux';
import { fetchMovieDataFromAPI } from '../../store/actions/movie';
import Header from '../ui/Header';
import Home from '../container/Home';
import Cast from '../container/Cast';
import CastDetails from '../container/Cast/CastDetails';
import Loading from '../ui/Loading';
import NotFound from '../ui/Notfound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel,faEllipsisV,faShareAlt,faCommentAlt,faShieldAlt,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel,faEllipsisV,faShareAlt,faCommentAlt,faShieldAlt,faTimesCircle);
class Routes extends React.Component {
    
    componentDidMount () {
        this.props.dispatch( fetchMovieDataFromAPI() );
    }

    render() {
        const {movie} = this.props;
        
        if(movie.isFetching) {
            return <Loading />;
        }

        console.log(this.props.location);

        return (
                <BrowserRouter>
                    <main>
                        <Header 
                            title={movie.movie.Title} 
                            year={movie.movie.Year} 
                            genre={movie.movie.Genre} 
                            time={movie.movie.Runtime} 
                        />
                        <Switch>
                            <Redirect from="/home" to="/" />
                            <Route 
                                exact 
                                path="/" 
                                render={() => (
                                    <Home data={movie.movie} />
                                )} 
                            />
                            <Route 
                                exact 
                                path="/cast"
                                render={() => (
                                    <Cast actors={movie.movie.Actors} />
                                )}
                            />
                            <Route 
                                exact 
                                path="/cast/:name" // better pass id /cast/:id
                                component={CastDetails}
                            /> 
                            <Route component={NotFound} /> 
                        </Switch>
                    </main>
                </BrowserRouter>
            
        );
    }
} 

const mapStateToProps = state => {
    const movie = state.movie;
    return {
        movie
    }
}

export default connect(mapStateToProps)(Routes);