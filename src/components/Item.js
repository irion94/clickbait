import React from 'react'
import {ListGroupItem, Panel} from 'react-bootstrap'
import Img from "react-image";
import {Link} from 'react-router-dom'
import {Like} from 'react-facebook'

const Item = (props) => {
    let date = new Date(props.item.timestamp).toDateString();
    return (
        <ListGroupItem>
            <Panel>
                <Panel.Heading componentClass={'h3'}>
                    {props.item.title}
                    </Panel.Heading>
                <Panel.Body>
                    <Link to={`/clickbait/${props.item.id}`} props={props.item}>
                        <Img style={{maxWidth: '100%', maxHeight: 'auto'}} src={props.item.picture_path}/>
                    </Link>
                </Panel.Body>
                <Panel.Footer>
                    <Like href={`https://clickbaitl4.herokuapp.com/clickbait/${props.item.id}`} size="large"
                          colorScheme="dark"
                          share layout="button_count"
                          mobileIframe={true}
                    />
                    <div style={{textAlign:'right', fontSize: 10}}>
                        {"Data dodania: " + date}
                    </div>
                </Panel.Footer>
            </Panel>
        </ListGroupItem>
    )
}
export default Item
