import React, {Component} from 'react';
import {NavLink}from 'react-router-dom';
import './PageNavbar.scss';

class PageNavbar extends Component {
    render() {
        return( 
            <ul className='header-links-list'>
                <li className='list-item'>
                    <NavLink to='/practice' activeClassName='active'>All</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='practice/a' activeClassName='active'>expert</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/e' activeClassName='active'>qualified</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/a' activeClassName='active'>beginner</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/q' activeClassName='active'>none</NavLink>
                </li>
            </ul>
        )
    }

}

export default PageNavbar;