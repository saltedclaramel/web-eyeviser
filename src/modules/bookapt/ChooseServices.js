import React, { Component } from 'react';
import {  Button, Row } from 'react-bootstrap';
import FindStore from './FindStore.js';
import ServiceBtn from './ServiceBtn.js'
import ServiceBtnData from './ServiceBtnData';
// import AlertError from './AlertError';

class ChooseServices extends Component{
    constructor(props){
        super(props)
        this.state = {
            services: ServiceBtnData,
            serviceClicked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    continue = e => {
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }


    handleChange(id){
        this.props.chosenServices.length = 0;
        this.setState( prevState => {
            const updatedServices = prevState.services.map( service => {
                if ( service.id === id ){
                    service.chosen = !service.chosen 
                }
                if ( service.chosen === true && this.props.chosenServices.indexOf(service.serviceName)<0){
                    this.props.chosenServices.push(service.serviceName)
                    console.log(this.props.chosenServices)
                    this.setState({
                        serviceClicked: true
                    })
                }
                return service
            })

            return {
                services: updatedServices
            }
        })
    }

    render(){
        const serviceBtnComponents = this.state.services.map( serviceComponent => <ServiceBtn 
            key = { serviceComponent.id }
            name = { serviceComponent.serviceName } 
            handleChange = { this.handleChange } 
            chosen = { serviceComponent.chosen } 
            idNum = { serviceComponent.id }
            tooltipInfo = { serviceComponent.info }
        />)
        
        let nextButton;
        console.log(this.props.chosenServices.length)
        if (this.props.chosenServices.length !== 0){
            nextButton =  <Button onClick={ () => {this.continue();}} style={{ 'background': 'indigo', 'border': 'None' }}>
                            Next
                            </Button>
        } else {
            nextButton = ""
        }
        return (
            <div className="container">
                <h2 style={{ 'marginTop': '2em' }}>Choose Services (Select 1 or more)</h2>
                <i>Not sure? Mouse over for more information.</i>
                <br />
                <Row>
                    { serviceBtnComponents }
                </Row>
                <Row className='justify-content-center' style={{ 'paddingTop': '3em' }} >
                    <Button onClick={this.back} style={{ 'background': 'indigo', 'border': 'None', 'marginRight': '1em' }}>
                        Back
                    </Button>
                { nextButton }
                </Row>
            </div>
        )
            
    }
};

export default ChooseServices;
