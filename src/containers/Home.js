import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import MemeList from "../components/MemeList";
import MyPagination from "../components/MyPagination";
import ClickBaitItem from "./ClickBaitItem";

import {
    BrowserRouter as
        Router,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import Top from "./Top";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        //alert(`selected ${key}`);
        this.setState({ key });
    }

    render() {
        return (
            <Router>
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
                <Route path="/" exact component={MemeList} />
                <Route path="/top" component={Top} />
                <Route path="/ClickBait" component={ClickBaitItem} />
            </div>
            </Router>
        );
    }
}

export default Home