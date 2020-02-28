import React from 'react';
import './SelectGroup.scss';

const SelectGroup = props => {
   return ( 
   <div className='dropdown-select'>
        <select
            value={props.value}
            onChange={(event) => props.selectByMark(props.id, event)}
            id={props.id}
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