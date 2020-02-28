import React, {Component} from 'react-router-dom';

const links = [
        {to: '/', label: 'Deals', exact: false},
        {to: '/', label: 'Team', exact: false},
        {to: '/', label: 'Allocation', exact: false},
        {to: '/', label: 'Service requests', exact: false},
    ]

class Menu extends Component {

    renderLinks() {
        return links.map()
    }
    render() {
        return(
            <ul>
                {this.renderLinks()}
            </ul>
        )
    }
}