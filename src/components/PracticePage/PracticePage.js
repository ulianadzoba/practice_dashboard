import React, {Component} from 'react';
import './PracticePage.scss';
// import {Route, Switch} from 'react-router-dom';
import PageNavbar from './PageNavbar/PageNavbar';
// import All from './All';
// import Expert from './Expert';
import EmployeesTable from './EmployeesTable/EmployeesTable';
// import StachedChartBar from '../../components/PracticePage/StackedChartBar/StackedChartBar';


class PracticePage extends Component {
    render() {
        return(
            <React.Fragment>
                <div className='page-header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-xl-2 col-lg-4 col-md-4 col-sm-4'>
                                <div className='section-title'>
                                    Mixed Reality
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-7 col-md-7 col-sm-8 align-self-center'>
                                <div className='page-links'>
                                    <PageNavbar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Switch> */}
                    {/* <Route path='practice/' exact component={All}/> */}
                    {/* <Route path='practice/expert' exact component={Expert}/> */}
                {/* </Switch> */}
                {/* <div className='main-bar'>
                    <div className='container-fluid'>
                        <StachedChartBar/>
                    </div>
                </div>     */}
                <EmployeesTable/>
            </React.Fragment>

        )
    }
}

export default PracticePage;