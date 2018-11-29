import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Główna</Link>
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