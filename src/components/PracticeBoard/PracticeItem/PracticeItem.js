import React from 'react';
import './PracticeItem.scss';
import {Link} from 'react-router-dom';

function PracticeItem (props) {
    return(
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-8'>
            <div className='practice-item'>
                <div className='practice-item-header'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/practice'>
                        <div className='item-title header-title'>    
                            <span>{props.item.title}</span>
                        </div>
                        
                        <div className='item-date header-title'>
                            <span>Last updated: {props.item.date}</span>
                        </div>
                    </Link>
                </div>
                <div className='practice-item-body'>
                    <div className='item-field employees'>
                        <div className='item-icon'>
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div className='item-info'>
                            <div className='field-title'>
                                Total Employees
                            </div>
                            <div className='item-number'>
                                {props.item.employees}
                            </div>
                        </div>
                    </div>
                    <div className='item-field knowledge'>
                        <div className='item-icon'>
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div className='item-info'>
                            <div className='field-title'>
                                Knowledge Items
                            </div>
                            <div className='item-number'>
                                {props.item.knowledgeItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeItem;