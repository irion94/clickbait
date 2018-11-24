import React from 'react'
import Nav from "react-bootstrap/es/Nav";
// import Navbar from "react-bootstrap/es/Navbar";
import { Navbar, NavItem} from 'react-bootstrap'
import clickbait2 from '/Users/irion94/clickbait/src/img/clickbait2.png'

class TopNavigation extends React.Component {
    render() {
        return (

            <Navbar style={{alignItems:'center'}} bg="light" expand="lg" class={"App-header"}>
                <Navbar.Brand style={{}} href="#home">
                    <img width="150" height="100" src={{clickbait2}} alt={''}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem eventKey={1} href="#">
                            Główna
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Top 10
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default TopNavigation