import React from 'react';
import Select from 'react-select';
import './Employee.scss';



export default function Employee (props) {
        return (
            <div className='container-fluid employee-row'>
                <div className='row justify-content-between'>
                    <div className='col-xl-2 col-lg-2 col-md-4 employee-info'>
                        <div className='employee-photo'>
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div className='employee-name'>
                            {props.employee.name}
                        </div>     
                    </div>
                    
                    {props.employee.skills.map((skill, skillId) => {
                        return(
                            <div className='col-xl-1 col-lg-1 col-md-2 gate-info' key={skillId}>
                                <Select
                                    key={skill.id} 
                                    value={props.markOptions.find(option => option.value === skill.mark)}
                                    options={props.markOptions} 
                                    onChange={(event) => props.handleChange(skillId, event, props.employeeId)}
                                    autoFocus={false}
                                    isSearchable={false}
                                />  
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
