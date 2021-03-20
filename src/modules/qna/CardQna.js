import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap"


class CardQna extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { qnaEventKey, question, answer } = this.props;
        return (
            <div>
                 <Card>
                    <Card.Header style={{"background": "white"}}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={ qnaEventKey } style={{"text-align": "left"}}>
                        <b>{ question }</b>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={qnaEventKey}>
                    <Card.Body>{ answer }</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </div>
        )
    }
}

export default CardQna;