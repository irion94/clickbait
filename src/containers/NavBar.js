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
                        <Navbar.Brand>
                            <a href={"/top"}>Top!</a>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <a href={"/upload"}>Uploaduj ClickBaita!</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>

        );
    }
}

export default NavBar