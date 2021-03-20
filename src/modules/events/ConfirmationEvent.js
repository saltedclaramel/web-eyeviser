import React, { Component } from "react";
import { Row, Button, ListGroup } from "react-bootstrap";

class ConfirmationEvent extends Component {
  continue = e => {
    e.preventDefault();
    this.props.eventNextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.eventPreviousStep();
  }
  
  constructor(props){
    super(props)
  }

  render() {
    // const {eventValues = { eventFirstName, eventLastName, eventOrganisation, eventAge, eventEmail, eventContact, eventInterested, eventReach, questions, consent } }= this.props;
    return (
    <div className="container" style={{'marginTop': '2em'}}>
      <h2>
        Confirmation
      </h2>
      <ListGroup variant="flush">
        <ListGroup.Item>First Name: { this.props.eventValues.eventFirstName }</ListGroup.Item>
        <ListGroup.Item>Last Name: { this.props.eventValues.eventLastName }</ListGroup.Item>
        <ListGroup.Item>Organisation: { this.props.eventValues.eventOrganisation }</ListGroup.Item>
        <ListGroup.Item>Age: { this.props.eventValues.eventAge }</ListGroup.Item>
        <ListGroup.Item>Email: { this.props.eventValues.eventEmail }</ListGroup.Item>
        <ListGroup.Item>Contact number: { this.props.eventValues.eventContact }</ListGroup.Item>
        <ListGroup.Item>Interested in event(s): { this.props.eventValues.eventInterested }</ListGroup.Item>
        <ListGroup.Item>Learnt about eyeviser through: { this.props.eventValues.eventReach }</ListGroup.Item>
        <ListGroup.Item>Questions: { this.props.eventValues.questions }</ListGroup.Item>
        <ListGroup.Item>Consent to receiving future notice: { this.props.eventValues.consent }</ListGroup.Item>

        {/* for formik
        <ListGroup.Item>First Name: { this.props.eventValues.firstName }</ListGroup.Item>
        <ListGroup.Item>Last Name: { this.props.eventValues.lastName }</ListGroup.Item>
        <ListGroup.Item>Organisation: { this.props.eventValues.organisation }</ListGroup.Item>
        <ListGroup.Item>Age: { this.props.eventValues.age }</ListGroup.Item>
        <ListGroup.Item>Email: { this.props.eventValues.email }</ListGroup.Item>
        <ListGroup.Item>Contact number: { this.props.eventValues.contact }</ListGroup.Item>
        <ListGroup.Item>Interested in event(s): { this.props.eventValues.checked}</ListGroup.Item>
        <ListGroup.Item>Wish to invite Eyeviser to the organisation: { this.props.eventValues.invited}</ListGroup.Item>
        <ListGroup.Item>Learnt about eyeviser through: { this.props.eventValues.outreach }</ListGroup.Item>
        <ListGroup.Item>Comment: { this.props.eventValues.comment }</ListGroup.Item>
        <ListGroup.Item>Consent to receiving future notice: { this.props.eventValues.consent }</ListGroup.Item> */}

      </ListGroup>
      <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
          <Button onClick={this.back} style={{'background': 'indigo', 'border': 'None', 'marginRight': '1em'}}>
              Back
          </Button>
          <Button onClick={this.continue} style={{'background': 'indigo', 'border': 'None'}}>
              Confirm
          </Button>
      </Row>
    </div>
    );
  }
}

export default ConfirmationEvent;