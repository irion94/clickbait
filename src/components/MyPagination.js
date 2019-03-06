import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'
import '../App.css';

class MyPagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 1
        }
    }

    onClickHandler(number) {
        if(number !== this.props.number){
            this.props.pageHandler(number)
            this.setState({active: number})
        }
    }

    render() {
        let items = [];
        let page_number = this.props.count / 5 + 1;
        if(Number.isInteger(this.props.number)){
            for (let number = 1; number <= page_number; number++) {
                items.push(
                    <Pagination.Item
                        href={`/${number}`}
                        eventKey={number}
                        onClick={() => this.onClickHandler(number)}
                        active={number === this.props.number}
                    >
                        {number}
                    </Pagination.Item>
                );
            }
            return <Pagination size="lg" >{items}</Pagination>
        }
        else{
            return null
        }
    }
}

export default MyPagination