import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import DatePickerSchedule from "./DatePickerSchedule";
import TimePickerSchedule from './TimePickerSchedule';

class Schedule extends Component {
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
      title: "schedule",
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
    <div className="container" style={{'marginTop':'2em'}}>
      <h2>
        Pick a schedule
      </h2>
      Appointment timing will be based on store/clinic availability. 
      <br/>
      We will be in touch with you within 48 hours to confirm your appointment.
      <br/><br/>

      {this.props.chosenServices.map((service) => {
        return (
          <div>
            {/* NEED TO CHANGE THIS */}
            <b>Choose a time slot for { service }</b>
            <Row style={{margin: 10}}>
              <Col xs={6}>
                <DatePickerSchedule></DatePickerSchedule>
              </Col>
              <Col xs={6}>
                <TimePickerSchedule></TimePickerSchedule>
              </Col>
            </Row>
        
          </div>
                
            )
          })}
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

export default Schedule;
