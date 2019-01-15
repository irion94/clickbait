import React, {Component} from 'react'
import ListItem from "../components/Item";
import firebase from "firebase/app";
import {Panel} from 'react-bootstrap'
import {Comments} from "react-facebook";
import ReactGA from "react-ga";

class ClickBaitItem extends Component {
    state = {
        item: {}
    };

    componentDidMount() {
        firebase.database().ref(`/${this.props.id}`).once('value')
            .then((result) => {
                this.setState({item: result.val()})
            });
    };


    render() {
        ReactGA.pageview(window.location.pathname);
        return (
            <div>
                <ListItem item={this.state.item}/>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">{this.state.item.description}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Footer>
                        <Comments href={`https://clickbaitl4.herokuapp.com/clickbait/${this.props.id}`}/>
                    </Panel.Footer>
                </Panel>
            </div>
        );
    }
};

export default ClickBaitItem