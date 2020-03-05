import React from 'react';
import { NavLink } from 'react-router-dom';
import {DiApple} from 'react-icons/di';

export default function HeaderComponent(){
    return (
    <header className="header">
        <nav className="navbar_top">
            <ul>
                <li style={{'marginTop':'-6px', 'marginLeft': '-3px'}}><a href="#"><DiApple color='grey' size='1.5rem'/></a></li>
                <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/whistler-web">Whistler Web</NavLink></li>
                <li><NavLink activeClassName="active" to="/react-hooks">React Hooks</NavLink></li>
                <li><NavLink activeClassName="active" to="/graph-ql">GraphQL</NavLink></li>
                <li><NavLink activeClassName="active" to="/react-redux">React/Redux</NavLink></li>
                <li><NavLink activeClassName="active" to="/npms-tests">NPM test</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}