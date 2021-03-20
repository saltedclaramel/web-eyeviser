import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'


class FormSlider extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    constructor(props) {
        super(props);
    }
    render(){

        return (
            <div className="container">
                
            <center><h2 style={{'paddingTop': '2em'}}>The 1-minute booking system</h2></center>

            <Row style={{'paddingTop': '1em'}}>
                <Col>
                <center>
                    <div className="circle">1</div>
                    Choose services
                </center>
                </Col>
                <Col>
                <center>
                    <div className="circle">2</div>
                    Find a store
                </center>
                </Col>
                <Col>
                <center>
                    <div className="circle">3</div>
                    Pick a schedule
                </center>
                </Col>
                <Col>
                <center>
                    <div className="circle">4</div>
                    Your info
                </center>
                </Col>
                <Col>
                <center>
                    <div className="circle">5</div>
                    Confirmation
                </center>
                </Col>
            </Row>

            <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
                <Button onClick={this.continue} style={{'background': 'indigo', 'border': 'None'}}>
                    Book an appointment
                </Button>
            </Row>

            </div>
        );
    }
    }

export default FormSlider;