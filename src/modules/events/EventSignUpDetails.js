import React, { Component } from "react";
import { Row, Col, Button, Form, Alert } from "react-bootstrap";
import '../../assets/css/EventSignUpDetails.css'
// import EventForm from './EventForm'

class EventSignUpDetails extends Component {
    continue = e => {
        // e.preventDefault();
        this.props.eventNextStep();
      }

    constructor(props) {
        super(props);
        this.state = {
            title: "eventSignUpDetails",
            errors: {}
        };
    }

  render() {
    const { eventValues, handleEventChange } = this.props;
    return (
    <div className="container" style={{'paddingleft': '3em', 'paddingRight': '3em', 'marginTop': '2em'}}>
        <Alert variant="info" style={{'marginTop': '2em'}}>
            <Alert.Heading><h2>Did you know?</h2></Alert.Heading>
            <p style={{'fontSize':'20px'}}>
                80% of blindness is preventable and treatable.
                <br/>
                A <Alert.Link href="../bookapt">comprehensive eye exam</Alert.Link> can catch up to 20 health conditions including diabetes and stroke.
            </p>
        

        </Alert>
        <div className="row justify-content-center" style={{marginTop: "20px"}}>
            <h2>Our Public Webinars To Date:</h2>
        </div>
        <div className="row justify-content-center">
             <Button style={{backgroundColor: "#FF6862"}} variant="outline-light"><a href="https://www.youtube.com/channel/UCtfaEDM8vf9Gc3l9p8aHg6w">Click here to view our YouTube channel</a></Button>
        </div>
        <h2 style={{marginTop: 20}}>Upcoming events:</h2>
        <h2 style={{'marginTop': '1em'}}>Event Registration Details</h2>
        <p>Zoom links to the webinar will be emailed to you before the webinar, so please do check your emails!</p>
        {/* <EventForm eventValues={this.props.values} signUp = {this.continue}></EventForm> */}
        <Form style={{padding: 15}}>
            <Row style={{'paddingBottom': '1em'}}>
                <Col xs={6} style={{'padding': '0em'}}>
                    <Form.Label>
                        First Name:
                    </Form.Label>
                    <Form.Control placeholder="Enter first name" onChange={handleEventChange('eventFirstName')} defaultValue={eventValues.eventFirstName}/>
                </Col>
                <Col xs={6} style={{'paddingRight': '0em'}}>
                    <Form.Label>
                        Last Name:
                    </Form.Label>
                    <Form.Control placeholder="Enter last name" onChange={handleEventChange('eventLastName')} defaultValue={eventValues.eventLastName}/>
                </Col>
            </Row>
            <Row style={{'paddingBottom': '1em'}}>
                <Col xs={6} style={{'padding': '0em'}}>
                    <Form.Label>
                        Organisation:
                    </Form.Label>
                    <Form.Control placeholder="Enter organisation" onChange={handleEventChange('eventOrganisation')} defaultValue={eventValues.eventOrganisation}/>
                </Col>
                <Col xs={6} style={{'paddingRight': '0em'}}>
                    <Form.Label>
                        Age:
                    </Form.Label>
                    <Form.Control placeholder="Enter age" onChange={handleEventChange('eventAge')} defaultValue={eventValues.eventAge}/>
                </Col>
            </Row>
            <Row style={{'paddingBottom': '1em'}}>
                <Col xs={6} style={{'padding': '0em'}}>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control placeholder="Enter email" onChange={handleEventChange('eventEmail')} defaultValue={eventValues.eventEmail}/>
                </Col>
                <Col xs={6} style={{'paddingRight': '0em'}}>
                    <Form.Label>
                        Contact number:
                    </Form.Label>
                    <Form.Control placeholder="Mobile" onChange={handleEventChange('eventContact')} defaultValue={eventValues.eventContact}/>
                </Col>
            </Row> 
            <Row style={{'paddingBottom':'1em'}}><b>We will send out a reminder 24 hours before your appointment.</b></Row>
            <Form.Group>
                <Form.Label>Interested In:</Form.Label>
                <Form.Check type="checkbox" label="All you wanted to know about myopia, presbyopia, astigmatism (Fri, 18 Dec, 12pm)" ></Form.Check>
                <Form.Check type="checkbox" label="Managing myopia progression for kids (Date TBC)"></Form.Check>
                <Form.Check type="checkbox" label="How to choose the right eyewear (lenses/frames)" ></Form.Check>
                <Form.Control placeholder="Other"/>
            </Form.Group>

            <Row>
                <Col xs={6} >
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>I would like to invite Eyeviser to host a talk for my organisation</Form.Label>
                        <Form.Control as="select">
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How did you learn about our event?</Form.Label>
                        <Form.Control as="select">
                        <option>Eyeviser Newsletter</option>
                        <option>Eyeviser Facebook</option>
                        <option>Facebook Ad</option>
                        <option>Eyeviser Instagram</option>
                        <option>Family/Friends</option>
                        <option>Others</option>
                        </Form.Control>
                    </Form.Group>
                </Col>

            </Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Questions You Have For Our Eye Care Professionals/Remarks/Questions</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleEventChange('questions')} defaultValue={eventValues.questions}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>I consent to receiving notice of future eyecare talks, promotions or marketing collaterals from Eyeviser.</Form.Label>
                <Form.Check type="radio" label="Yes"></Form.Check>
                <Form.Check type="radio" label="No"></Form.Check>
            </Form.Group>

        </Form>

        <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
            <Button onClick={ this.continue } style={{'background': 'indigo', 'border': 'None'}}>
                Sign up
            </Button>
        </Row>
    </div>
    );
    }
    }

export default EventSignUpDetails;
