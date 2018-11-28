import React, {Component} from 'react'
import ListItem from "../components/ListItem";
import firebase from "firebase/app";
import {Panel} from 'react-bootstrap'

class ClickBaitItem extends Component{
    state = {
      item: {}
    };
    componentDidMount(){
        firebase.database().ref(`/${this.props.match.params.id}`).once('value')
            .then((result) => {
                this.setState({item:result.val()})
            });
        };


    render() {
        return (
            <div>
                <ListItem item={this.state.item}/>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.state.item.description}</Panel.Title>
                    </Panel.Heading>
                </Panel>
            </div>
        );
    }
};

export default ClickBaitItem