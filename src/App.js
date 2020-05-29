import React, {Component} from 'react';
import './App.css';
import Home from '../src/containers/Home'
import classmate from "./img/classmate.png";
import Img from "react-image";
import {Modal} from 'react-bootstrap'
import {FacebookProvider} from 'react-facebook'
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import MemeList from "./components/MemeList";
import Top from "./containers/Top";
import Upload from "./containers/Upload";
import ClickBaitItem from "./containers/ClickBaitItem";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { setWebviewBounce, setBackForwardNavigationGestures, getBackForwardNavigationGesturesState } from "capacitor-plugin-ios-webview-configurator";

class RedirectApp extends Component {
    render() {
        return <Redirect to={'/main/1'}/>
    }
}

class App extends Component {

    componentDidMount() {
        setWebviewBounce(true);
        setBackForwardNavigationGestures(true)
        getBackForwardNavigationGesturesState(true)
    }

    render() {
        return (
            <Router>
                <div className={"App"}>
                    <div>
                        <FacebookProvider appId={"202520040658664"}>
                            <header style={{background: 'black', border: 'black'}}>
                                <Img style={{maxWidth: '-webkit-fill-available', maxHeight: 150}} src={classmate}/>
                            </header>
                            <Home/>
                            <Route path="/" render={() => <RedirectApp/>}/>
                            <Route path="/main/:page" exact render={(props) => <MemeList {...props}/>}/>
                            <Route path="/main/:page" exact render={(props) => <MemeList {...props}/>}/>
                            <Route path="/top" component={Top}/>
                            <Route path="/upload" strict component={Upload}/>
                            <Route path="/ClickBait/:id" render={(props) => <ClickBaitItem {...props}/>}
                                   isAuthed={true}/>
                            <Route path="/privacy-policy" render={() => <PrivacyPolicy/>}/>
                            <Modal.Footer style={{textAlign: 'center'}}>
                                <p>Created using React.js and Ionic</p>
                                <Link to={"/privacy-policy"}> Privacy policy </Link>
                            </Modal.Footer>
                        </FacebookProvider>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
