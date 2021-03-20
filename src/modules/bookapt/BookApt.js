import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSlider from './FormSlider';
import ChooseServices from './ChooseServices';
import FindStore from './FindStore';
import Schedule from './Schedule';
import Info from './Info';
import Confirmation from './Confirmation'
import Success from './Success'
import ServiceBtnData from './ServiceBtnData';
//include css
import '../../assets/css/BookApt.css';

class BookApt extends Component {
    state = {
        step: 1,
        overlayName: "",
        value: "",
        // services: [],
        services: ServiceBtnData,
        chosenServices: [],
        serviceClicked: false,
        store: "",
        timeSlot: "",
        firstName: "",
        lastName: "",
        organisation: "",
        age: "",
        email: "",
        contact: "",
        reminder: "",
        comments: ""
    }
    //go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        console.log(this.state.chosenServices);
    }
    //go to previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    
      // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    handler(){
        console.log(this.state.chosenServices);
    }


    render() {
        const { step } = this.state;
        const { services, store, timeSlot, firstName, lastName,organisation, age, email, contact, reminder, comments, chosenServices } = this.state;
        const values = { services, store, timeSlot, firstName, lastName,organisation, age, email, contact, reminder, comments, chosenServices }
        // const [services, setServices] = React.useState(services);

        

        switch(step) {
            //form slider
            case 1:
                return (
                <FormSlider 
                nextStep = { this.nextStep }
                />
                )
                
            //choose services
            case 2:
                return (
                    <ChooseServices
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    // handleAdd = { this.handleAdd }
                    handleChange = { this.handleChange }
                    handleBtnChange = { this.handleBtnChange }
                    overlayName = { this.overlayName }
                    values = { values }
                    services = { this.services }
                    handler = {this.handler}
                    chosenServices = {this.state.chosenServices}
                    />
                )
            //find store
            case 3:
                return (
                    <FindStore
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    chosenServices = {this.state.chosenServices}
                    />
                )
                //schedule
            case 4:
                return (
                    <Schedule
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    chosenServices = {this.state.chosenServices}
                    />
                )
                
            //info
            case 5:
                return (
                    <Info
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />
                )
            //confirmation
            case 6:
                return (
                    <Confirmation
                    previousStep = { this.previousStep }
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    chosenServices = {this.state.chosenServices}
                    />
                )
            //success
            case 7:
                return <Success></Success>;
        }
       
    }
}


export default BookApt;