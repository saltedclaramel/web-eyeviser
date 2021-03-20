import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//include css
import '../../assets/css/BookApt.css';
import EventSignUpDetails from './EventSignUpDetails';
import ConfirmationEvent from './ConfirmationEvent';
import EventSuccess from './EventSuccess';

class Events extends Component {
    state = {
        eventStep: 1,
        eventFirstName: "",
        eventLastName: "",
        eventOrganisation: "",
        eventAge: "",
        eventEmail: "",
        eventContact: "",
        eventInterested: [],
        inviteEyeviser: "",
        eventReach: "",
        questions: "",
        consent: false
        // firstName: '',
        // lastName: '',
        // organisation: '',
        // age: '',
        // email: '',
        // contact: '',
        // checked: [],
        // invited: "",
        // outreach: "",
        // comment : "",
        // consent: ""
    }
    //go to next step
    eventNextStep = () => {
        const { eventStep } = this.state;
        this.setState({
            eventStep: eventStep + 1
        });
    }

    eventPreviousStep = () => {
        const { eventStep } = this.state;
        this.setState({
            eventStep: eventStep - 1
        });
    }

    handleEventChange = input => e => {
        this.setState({[input]: e.target.value})
    }
    


    render() {
        const { eventStep } = this.state;
        const { eventFirstName, eventLastName, eventOrganisation, eventAge, eventEmail, eventContact, eventInterested, eventReach, questions, consent } = this.state;
        const eventValues = { eventFirstName, eventLastName, eventOrganisation, eventAge, eventEmail, eventContact, eventInterested, eventReach, questions, consent }
        // const {firstName, lastName, organisation, age, email, contact, checked, invited, outreach, comment, consent } = this.state;
        // const eventValues = {firstName, lastName, organisation, age, email, contact, checked, invited, outreach, comment, consent };
        switch(eventStep) {
            //form slider
            case 1:
                return (
                <EventSignUpDetails 
                eventNextStep = { this.eventNextStep }
                handleEventChange = { this.handleEventChange }
                // values = { eventValues }
                eventValues = { eventValues }
                />
                )
                

            
            //confirmation
            case 2:
                return (
                    <ConfirmationEvent
                    eventPreviousStep = {this.eventPreviousStep}
                    eventNextStep = { this.eventNextStep }
                    handleEventChange = { this.handleEventChange }
                    eventValues = { eventValues }
                    />
                )
            //success
            case 3:
                return <EventSuccess></EventSuccess>;
        }
       
    }
}


export default Events;