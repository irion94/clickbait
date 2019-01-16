import React, {Component} from 'react'
import {initializeReactGA} from "../firebase";

class Top extends Component {
    render(){
        initializeReactGA();
        return(
            <div>
                <p>
                    In progress.....
                </p>
            </div>
        )
    }
}

export default Top