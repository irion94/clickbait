import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap'
import "../App.css"

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header >
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