import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
                <Navbar>
                    <Nav>
                        <NavItem href={'/main/1'}>
                            Classmate board
                        </NavItem>
                        <NavItem href={'/upload'}>
                            Share your photos
                        </NavItem>
                    </Nav>
                </Navbar>
        );
    }
}

export default Home
