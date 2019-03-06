import React, {Component} from 'react';
import {Nav} from 'react-bootstrap'
import "../App.css"

class NavBar extends Component {
    render() {
        return (
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Strona Główna</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/top">TOPKA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/upload">Uploaduj ClickBaita!</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavBar