import React, {Component} from 'react'
import ListItem from "../components/Item";
import firebase from "firebase/app";
import {Card} from 'react-bootstrap'
import {Comments} from "react-facebook";
import {initializeReactGA} from "../firebase";

class ClickBaitItem extends Component {
    state = {
        item: {}
    };

    componentWillMount() {
        firebase.database().ref(`/${this.props.id}`).once('value')
            .then((result) => {
                this.setState({item: result.val()})
            });
    };


    render() {
        initializeReactGA();
        return (
            <div>
                <ListItem item={this.state.item}/>
                <Card>
                    <Card.Header componentClass="h3">{this.state.item.description}</Card.Header>
                    <Card.Footer>
                        <Comments href={`https://clickbaitl4.herokuapp.com/clickbait/${this.props.id}`}/>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
};

export default ClickBaitItem