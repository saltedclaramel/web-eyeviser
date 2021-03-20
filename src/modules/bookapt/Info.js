import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

class Info extends Component {
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
      title: "info"
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
    <div className="container" style={{'paddingleft': '3em', 'paddingRight': '3em', 'marginTop': '2em'}}>
      <h2>Your info</h2>
      <Form>
        <Row style={{'paddingBottom':'1em'}}>
          <Col xs={6} style={{'padding':'0em'}}>
            <Form.Label>
              First Name:
            </Form.Label>
            <Form.Control placeholder="Enter first name" onChange={handleChange('firstName')} defaultValue={values.firstName}/>
          </Col>
          <Col xs={6} style={{'paddingRight':'0em'}}>
            <Form.Label>
              Last Name:
            </Form.Label>
            <Form.Control placeholder="Enter last name" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
          </Col>
        </Row>
        <Row style={{'paddingBottom':'1em'}}>
          <Form.Label>Organisation:</Form.Label>
          <Form.Control placeholder="Enter organisation" onChange={handleChange('organisation')} defaultValue={values.organisation}/>
        </Row>
        <Row style={{'paddingBottom':'1em'}}>
          <Form.Label>Age:</Form.Label>
          <Form.Control placeholder="Enter age" onChange={handleChange('age')} defaultValue={values.age}/>
        </Row>
        <Row style={{'paddingBottom':'1em'}}>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleChange('email')} defaultValue={values.email}/>
        </Row>
        <Row style={{'paddingBottom':'1em'}}>
          <Form.Label>Contact number:</Form.Label>
          <Form.Control placeholder="Mobile" onChange={handleChange('contact')} defaultValue={values.contact}/>
        </Row>
        
        <Row style={{'paddingBottom':'1em'}}><b>We will send out a reminder 24 hours before your appointment.</b></Row>
        <Form.Group>
          <Form.Label>Preferred option for reminder:</Form.Label>
          <Form.Check type="radio" label="Email" onChange={handleChange('reminder')} defaultValue={values.reminder}></Form.Check>
          <Form.Check type="radio" label="SMS" onChange={handleChange('reminder')} defaultValue={values.reminder}></Form.Check>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments: (Optional)</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={handleChange('comments')} defaultValue={values.comments}/>
        </Form.Group>
        </Form>
   
      <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
          <Button onClick={this.back} style={{'background': 'indigo', 'border': 'None', 'marginRight': '1em'}}>
              Back
          </Button>
          <Button onClick={this.continue} style={{'background': 'indigo', 'border': 'None'}}>
              Next
          </Button>
      </Row>
    </div>
    );
  }
}

export default Info;
