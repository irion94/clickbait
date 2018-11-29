import React, {Component} from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <div style={{alignItems:'left'}}>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href={"/"}>Główna</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem href={'/top'}>
                            Topka!
                        </NavItem>
                        <NavItem href={'/upload'}>
                            Uploaduj ClickBaita!
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>

        );
    }
}

export default NavBar