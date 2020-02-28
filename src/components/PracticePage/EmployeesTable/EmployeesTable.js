import React, {Component} from 'react';
import { categories, employeesData, markOptions} from '../../../data/employees';
import './EmployeesTable.scss';
import Employee from './Employee/Employee';
import SelectGroup from '../../../shared/SelectGroup/SelectGroup';


class EmployeesTable extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            employeesData: employeesData,
            filteredEmployee: [],
            currentCategory: null
        };
    }

    markChange = (skillId, event, employeeId) => {
        let currentCategory1 = employeesData[employeeId].skills[skillId];
        currentCategory1.mark = event.value;
        this.setState(
            { employeesData: employeesData },
        );
    };

    selectByName = event => {
        let currentEmployeeList = [];
        let newEmployeeList = [];

        if (event.target.value !== null) {
            currentEmployeeList = this.state.employeesData;
            newEmployeeList = currentEmployeeList.filter(item => {
                return item.name.toLowerCase().includes(event.target.value.toLowerCase().trim());
          });
        } 
        else {
            newEmployeeList = this.state.employeesData;
        };
        this.setState({
            filteredEmployee: newEmployeeList
        });
    }

    componentDidMount() {
        this.setState({
            categories: categories,
            filteredEmployee: this.state.employeesData,
            employeesData: employeesData
        })
    }

    selectByMark = (categoryId, event ) => {
        let currentEmployeeList = [];
        let newEmployeeList = [];

        if (event.target.value === 'all') {
            newEmployeeList = this.state.employeesData;
            console.log(categoryId);
        }
        else {
            if (this.state.currentCategory === (categoryId-1)) {
                currentEmployeeList = this.state.employeesData;
            } else {
                currentEmployeeList = this.state.filteredEmployee;
            }
            newEmployeeList = currentEmployeeList.filter(item => item.skills[categoryId-1].mark === event.target.value) 
            
        };
        this.setState({
            filteredEmployee: newEmployeeList,
            currentCategory: categoryId-1
        });
    }

    render() {
        return (
            <div className='main-table'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-2 table-title'>First name</div>
                        {this.state.categories.map(category => {
                        return (
                              <div className='col-xl-1 table-title'>{category.title}</div>
                            )
                        })}
                    </div>
                    <div className='row'>
                        <div className='col-xl-2 col-lg-2 table-header'>
                            <div className='input-select-by-name'>
                                <input type='text' placeholder='All' onChange={this.selectByName}/>
                            </div>
                        </div>
                        {this.state.categories.map(category => {
                                return (
                                    <div className='col-xl-1 col-lg-1 table-header'>
                                        <SelectGroup  
                                            id={category.id}
                                            selectByMark={this.selectByMark}
                                            options={[
                                                {text: 'All', value: 'all'},
                                                {text: 'Beginner', value: 'beginner'},
                                                {text: 'Qualified', value: 'qualified'},
                                                {text: 'Expert', value: 'expert'}
                                            ]}
                                        />
                                    </div>                               
                                )              
                            }      
                        )}                    
                    </div>
                </div>
                {this.state.filteredEmployee.map((employee, employeeId) => {
                    return (
                        <Employee 
                            key={employee.id}
                            employee={employee}
                            selectedValue={this.state.selectedOption}
                            employeeId={employeeId}
                            markOptions={markOptions}  
                            handleChange={this.markChange}
                        />
                    )
                })}       
            </div>
        )
    }
}

export default EmployeesTable;