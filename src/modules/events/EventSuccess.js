import React, { Component } from "react";

class EventSuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "eventSuccess"
    };
  }

  render() {
    return (
    <div className="container" style={{'marginTop': '2em', 'marginBottom': '20%'}}>
        <center>
            <h2>Thank you for registering for our event!</h2>
            <p>We will be in touch with you within 48 hours to confirm that your registration for the event is successful.</p>
            <p>If you have any questions, please feel free to call or whatsapp us at +65 8850 1568.</p>
            <p>We look forward to seeing you!</p>
        </center>
      
    </div>
    );
  }
}

export default EventSuccess;