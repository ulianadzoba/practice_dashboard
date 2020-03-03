import React, {Component} from 'react';
import { categories, employeesData, markOptions} from '../../../data/employees';
import './EmployeesTable.scss';
import Employee from './Employee/Employee';
import SelectGroup from '../../../shared/SelectGroup/SelectGroup';
import StackedChartBar from '../StackedChartBar/StackedChartBar';


class EmployeesTable extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            employeesData: employeesData,
            filteredEmployee: [],
            // currentCategory: null
        };
    }

    markChange = (skillId, event, employeeId) => {
        let currentCategory1 = employeesData[employeeId].skills[skillId];
        currentCategory1.mark = event.value;
        this.setState(
            { employeesData: employeesData },
        );
        this.calculateTotalValue();
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

    
    calculateTotalValue() {
        categories.map((category, categoryId) => {
            return markOptions.map((option, key) => {
               let selectedEmployee = employeesData.filter(item => item.skills[categoryId].mark === option.value)
               let number = selectedEmployee.length;
               let categoryCurentValue = category.totalValue.find(i => i.title === option.value);              
               return categoryCurentValue.number = number;         
            })
         })
        this.setState({
            categories: categories
         })
        
    }

    applyAllFilters = (record, allConditions) => {
        for(let [categoryId, markValue] of Object.entries(allConditions)) {
          if (record.skills[categoryId - 1].mark !== markValue && markValue !== 'all' && record.skills[categoryId] !== 'none') {
              return false;
          }
        }
        return true;
    }

    selectByMark = () => {
        // let currentEmployeeList = [];
        // let newEmployeeList = [];

        // if (event.target.value === 'all') {
        //     newEmployeeList = this.state.employeesData;
        // }
        // else {
        //     if (this.state.currentCategory === (categoryId-1)) {
        //         currentEmployeeList = this.state.employeesData;
        //     } else {
        //         currentEmployeeList = this.state.filteredEmployee;
        //     }
        //     newEmployeeList = currentEmployeeList.filter(item => item.skills[categoryId-1].mark === event.target.value) 
            
        // };
        // this.setState({
        //     filteredEmployee: newEmployeeList,
        //     currentCategory: categoryId-1
        // });
        let dropdowns = document.getElementsByClassName("category-filter-dropdown");
        let selectedCategories = {};
        
        for (let x of dropdowns) {
          selectedCategories[x.dataset.category] = x.value;
        }

        let newEmployeeList = employeesData.filter(item => this.applyAllFilters(item, selectedCategories)); 
            
        this.setState({
            filteredEmployee: newEmployeeList,
            // currentCategory: categoryId-1
        });    
    } 

    componentDidMount() {
        this.setState({
            categories: categories,
            filteredEmployee: this.state.employeesData,
            employeesData: employeesData
        });
        this.calculateTotalValue();
        
    }
   
    render() {
        return (
            <>
                <div className='main-bar'>
                    <div className='container-fluid'>
                            <StackedChartBar categories={this.state.categories}/>
                    </div>
                </div>  
                <div className='main-table'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-2 col-md-2 table-title'>
                                <div>First name</div>
                            </div>
                            {this.state.categories.map(category => {
                            return (
                                <div className='col-xl-1 col-ld-1 col-md-1 table-title' key={category.id}>
                                    <div>{category.title}
                                    </div>
                                </div>
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
                                        <div className='col-xl-1 col-lg-1 table-header' key={category.id}>
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
            </>
        )
    }
}

export default EmployeesTable;