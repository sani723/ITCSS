import * as React from 'react';
import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        const navbar = node.querySelector(".navbar");
        const navbarPosition = navbar.offsetTop;
        
        window.addEventListener('scroll', () => {
            window.pageYOffset >= navbarPosition ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        });
    }


    render() {
        return (
            <nav>
                <ul className="navbar">
                    <li><NavLink exact to="/" activeClassName="activeLink">Overview</NavLink></li> 
                    <li><NavLink exact to="/cast" activeClassName="activeLink">Cast</NavLink></li> 
                </ul> 
            </nav>
        );
    }
}

export default Nav;