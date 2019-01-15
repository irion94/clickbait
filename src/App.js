import React, {Component} from 'react';
import './App.css';
import NavBar from './containers/NavBar'
import header_image from "./img/c_full_logo.png";
import Img from "react-image";
import {Modal} from 'react-bootstrap'
import {FacebookProvider} from 'react-facebook'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import MemeList from "./components/MemeList";
import Top from "./containers/Top";
import Upload from "./containers/Upload";
import ClickBaitItem from "./containers/ClickBaitItem";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReactGA from 'react-ga';


class App extends Component {
    initializeReactGA() {
        ReactGA.initialize('UA-132483674-1');
        ReactGA.pageview('/homepage');
    }
    render() {
        this.initializeReactGA();
        return (
            <Router>
                <div className={"App"}>
                    <div className={"modal-body"}>
                        <FacebookProvider appId={"202520040658664"}>
                            <div className={"modal-content"}>
                                <Link to={"/"}>
                                    <header style={{background: 'black', border: 'black', borderRadius: 0}}>
                                        <Img style={{maxWidth: '-webkit-fill-available', maxHeight: 150}}
                                             src={header_image}/>
                                    </header>
                                </Link>
                                <NavBar/>
                                <Route path="/top" component={Top}/>
                                <Route path="/upload" component={Upload}/>
                                <Route path="/ClickBait/:id"
                                       render={(props) => <ClickBaitItem id={props.match.params.id}/>}/>
                                <Route path="/" exact render={() => <MemeList page={'1'}/>}/>
                                <Route path="/:page" exact
                                       render={(props) => <MemeList page={props.match.params.page}/>}/>
                                <Route path="/privacy-policy" exact render={() => <PrivacyPolicy/>}/>
                                <Modal.Footer style={{textAlign: 'center'}}>
                                    <Link to={"/privacy-policy"}> Polityka Prywatności</Link>
                                    <br/>
                                    <p>Copyright to Irion94</p>
                                    <p>Created in collaboration with React-Bootstrap</p>
                                </Modal.Footer>
                            </div>
                        </FacebookProvider>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
