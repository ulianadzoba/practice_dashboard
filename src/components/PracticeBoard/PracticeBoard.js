import React, {Component} from 'react';
import './PracticeBoard.scss';
import PracticeList from './PracticeList/PracticeList';
import {PracticesData} from '../../data/data';


class PracticeBoard extends Component {
    state = { 
        practices: [],
        isPractice: true,
    }

    componentDidMount() {
        this.renderPracticesList();
    }
    
    renderPracticesList() {
        this.setState({
            practices: PracticesData
        })
    }
    

    render() {
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-4 practice-board-title'>
                        Practice Board
                    </div>
                </div>
                <PracticeList practices={this.state.practices}/>
            </div>

        )
    }
}

export default PracticeBoard;