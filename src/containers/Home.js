import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div style={{alignItems:'left'}}>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href={"/main/1"}>Główna</a>
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

export default Home