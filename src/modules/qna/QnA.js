import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {  Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardQna from './CardQna';
import QnaData from './QnaData';

class QnA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "qna",
            qnaData: QnaData
        }
    }
    render() {
        const qnaComponents = this.state.qnaData.map( qnaComponent => <CardQna 
            key = { qnaComponent.id }
            qnaEventKey = {qnaComponent.eventKey}
            question = {qnaComponent.question}
            answer = {qnaComponent.answer}
        />)
        return (
            <div className="container">
                <h2 style={{ 'marginTop': '2em' }}>Q&A</h2>
                <Accordion>
                    { qnaComponents }
                </Accordion>
                
            </div>
        );
    }
}

export default QnA;
