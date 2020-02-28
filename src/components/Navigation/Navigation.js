import React, {Component} from 'react';
import Logo from './Logo/Logo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.scss';


class Navigation extends Component {
    render() {
        return(
                <Navbar collapseOnSelect expand="lg" className='navbar'>
                    <Nav.Link href='/'><Logo/></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/deals">Deals</Nav.Link>
                            <Nav.Link href="/team">Team</Nav.Link>
                            <Nav.Link href="/allocation">Allocation</Nav.Link>
                            <Nav.Link href="/requests">Service requests</Nav.Link>
                            <NavDropdown title="reports" id="collasible-nav-dropdown" className='drop'>
                                <NavDropdown.Item href="/report/1">Report 1</NavDropdown.Item>
                                <NavDropdown.Item href="/report/2">Report 2</NavDropdown.Item>
                                <NavDropdown.Item href="/reports">All Reports</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/report/show">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="manage" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/manage/1">Manage 1</NavDropdown.Item>
                                <NavDropdown.Item href="/manage/2">Manage 2</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/"><i class="far fa-bell"></i></Nav.Link>
                            <NavDropdown title="coe" className='coe' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/1" >coe</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/logout">logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;