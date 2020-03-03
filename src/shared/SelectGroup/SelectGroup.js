import React from 'react';
import './SelectGroup.scss';

const SelectGroup = props => {
   return ( 
   <div className='dropdown-select '>
        <select
            value={props.value}
            // onChange={(event) => props.selectByMark(props.id, event)}
            onChange={props.selectByMark}
            id={props.id}
            className="category-filter-dropdown"
            data-category={props.id}
        >
            {props.options.map((option, index) => {
                return (
                    <option
                        value={option.value}
                        key={option.value+index}
                    >
                        {option.text}
                    </option>
                )
            })}
        </select>
    </div>
   )
}

export default SelectGroup;