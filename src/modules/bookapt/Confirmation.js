import React, { Component } from "react";
import { Row, Button, ListGroup } from "react-bootstrap";

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  }
  constructor(props) {
    super(props);
    this.state = {
      title: "confirmation"
    };
  }

  componentDidMount(){
    
  }

  render() {
    const { values: {service, store, timeSlot, firstName, lastName, organisation, age, email, contact, reminder, comments} } = this.props;
    return (
    <div className="container" style={{'marginTop': '2em'}}>
      <h2>
        Confirmation
      </h2>
      <ListGroup variant="flush">
          {this.props.chosenServices.map((services) => {
            return (
                <ListGroup.Item>
                  <span> Service: <b>{ services }</b>, Store: <b>{ store }</b>, Timeslot: <b>{ timeSlot }</b> </span>
                </ListGroup.Item>
                
              )
          })}
        {/* <ListGroup.Item>Service:
          {this.props.chosenServices.map((services, index) => {
              return (
                <span> { index == 0 ? services : " , " + services } </span>
              )
          })}
        </ListGroup.Item> */}
        {/* <ListGroup.Item>Store: { store }</ListGroup.Item>
        <ListGroup.Item>Timeslot: { timeSlot }</ListGroup.Item> */}
        <ListGroup.Item>First Name: { firstName }</ListGroup.Item>
        <ListGroup.Item>Last Name: { lastName }</ListGroup.Item>
        <ListGroup.Item>Organisation: { organisation }</ListGroup.Item>
        <ListGroup.Item>Age: { age }</ListGroup.Item>
        <ListGroup.Item>Email: { email }</ListGroup.Item>
        <ListGroup.Item>Contact number: { contact }</ListGroup.Item>
        <ListGroup.Item>Preferred option for reminder: { reminder }</ListGroup.Item>
        <ListGroup.Item>Comments: { comments }</ListGroup.Item>
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

export default Confirmation;