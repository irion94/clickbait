import React, {Component} from 'react';
import './App.css';
import Home from '../src/containers/Home'
import clickbait2 from "./img/clickbait2.png";
import Img from "react-image";

class App extends Component {
  render() {
    return (
        <div className={"App"}>
            <header style={{background:'black', border:'black', borderRadius:10}}>
                <Img style={{ maxWidth:'-webkit-fill-available', maxHeight:150 }} src={clickbait2}/>
            </header>
            <Home/>
        </div>
    );
  }
}

export default App;
