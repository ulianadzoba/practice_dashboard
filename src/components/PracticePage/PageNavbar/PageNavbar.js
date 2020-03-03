import React, {Component} from 'react';
import {NavLink}from 'react-router-dom';
import './PageNavbar.scss';

class PageNavbar extends Component {
    render() {
        return( 
            <ul className='header-links-list'>
                <li className='list-item'>
                    <NavLink to='/practice_dashboard/practice' activeClassName='active'>All</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/practice_dashboard/practice/e' activeClassName='active'>expert</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/practice_dashboard/practice/q' activeClassName='active'>qualified</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/practice_dashboard/practice/b' activeClassName='active'>beginner</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='/practice_dashboard/practice/n' activeClassName='active'>none</NavLink>
                </li>
            </ul>
        )
    }

}

export default PageNavbar;