import React, { Component } from "react";

class Success extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "success"
    };
  }

  render() {
    return (
    <div className="container" style={{'marginTop': '2em', 'marginBottom': '20%'}}>
        <center>
            <h2>Thank you for booking an appointment with us.</h2>
            <p>Appointment timing will be based on store/clinic availability.</p>
            <p>We will be in touch with you within 48 hours to confirm your appointment.</p>
            <p>If you have any questions, please feel free to call or whatsapp us at +65 8850 1568.</p>
        </center>
      
    </div>
    );
  }
}

export default Success;