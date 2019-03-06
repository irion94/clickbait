import React from 'react'
import {ListGroupItem, Card} from 'react-bootstrap'
import Img from "react-image";
import {Link} from 'react-router-dom'
import {Like} from 'react-facebook'
import {initializeReactGA} from "../firebase";

const Item = (props) => {
    let date = new Date(props.item.timestamp).toDateString();
    initializeReactGA();
    return (
        <ListGroupItem>
            <Card>
                <Card.Header componentClass={'h3'}>
                    {props.item.title}
                    </Card.Header>
                <Card.Body>
                    <Link to={`/clickbait/${props.item.id}`} props={props.item}>
                        <Img style={{maxWidth: '100%', maxHeight: 'auto'}} src={props.item.picture_path}/>
                    </Link>
                </Card.Body>
                <Card.Footer>
                    <Like href={`https://clickbaitl4.herokuapp.com/clickbait/${props.item.id}`} size="large"
                          colorScheme="dark"
                          share layout="button_count"
                          mobileIframe={true}
                    />
                    <div style={{textAlign:'right', fontSize: 10}}>
                        {"Data dodania: " + date}
                    </div>
                </Card.Footer>
            </Card>
        </ListGroupItem>
    )
}
export default Item
