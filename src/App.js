import React, {Component} from 'react';
import './App.css';
import Home from '../src/containers/Home'
import clickbait2 from "./img/clickbait2.png";
import Img from "react-image";
import {Modal} from 'react-bootstrap'
import {FacebookProvider} from 'react-facebook'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import MemeList from "./components/MemeList";
import Top from "./containers/Top";
import Upload from "./containers/Upload";
import ClickBaitItem from "./containers/ClickBaitItem";
import PrivacyPolicy from "./components/PrivacyPolicy";

class App extends Component {
    render() {
        return (
            <Router>
                <div className={"App"}>
                    <div className={"container"}>
                        <FacebookProvider appId={"202520040658664"}>
                            <header style={{background: 'black', border: 'black', borderRadius: 10}}>
                                <Img style={{maxWidth: '-webkit-fill-available', maxHeight: 150}} src={clickbait2}/>
                            </header>
                            <Home/>
                            <Route path="/main/:page" exact render={(props) => <MemeList {...props}/>}/>
                            <Route path="/top" component={Top}/>
                            <Route path="/upload" strict component={Upload}/>
                            <Route path="/ClickBait/:id" render={(props) => <ClickBaitItem {...props}/>}
                                   isAuthed={true}/>
                            <Route path="/privacy-policy" render={() => <PrivacyPolicy/>}/>
                            <Modal.Footer style={{textAlign: 'center'}}>
                                <p>Copyright to Irion94</p>
                                <p>React rules!</p>
                                <p>Wordpress s*ck!</p>
                                <Link to={"/privacy-policy"}> Polityka Prywatności</Link>
                            </Modal.Footer>
                        </FacebookProvider>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
