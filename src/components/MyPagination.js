import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'

/**
 * nie działa gnojek
 */

class MyPagination extends Component {
    constructor(props){
        super(props)
        this.state = {
            active:1
        }
    }
    render(){
        let page_number = this.props.count / 10
        let active = this.state.active;
        let items = [];
        for (let number = 1; number <= page_number+1; number++) {
            items.push(
                <Pagination.Item eventKey={number} onClick={(num)=>console.log('o',num)} active={number === this.state.active}>{number}</Pagination.Item>
            );
        }

        console.log('pagination:', items)
        return(
            <Pagination bsSize="large">{items}</Pagination>
        )
    }
}

export default MyPagination