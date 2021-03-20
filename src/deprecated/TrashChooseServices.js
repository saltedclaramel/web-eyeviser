import React, { Component } from 'react';
import { Form, Tooltip, Button, Row, Col, OverlayTrigger } from 'react-bootstrap';
import FindStore from './FindStore';

const renderOpticalStore = (props) => (
    <Tooltip id="button-optical-store" {...props}>
        Optical Store
    </Tooltip>
);

const renderEyeClinic = (props) => (
    <Tooltip id="button-eye-clinic" {...props}>
        Eye doctor (Ophthalmologist) at eye clinic
    </Tooltip>
);

const renderEyeExamInfo = (props) => (
    <Tooltip id="button-eye-exam-info" {...props}>
        <ul>
            <li>Eye doctor (Ophthalmologist) at eye clinic</li>
            <li>Primary eye care professional (Optometrist) at optical store</li>
        </ul>
    </Tooltip>
);
function ServiceButtonSelected_store(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderOpticalStore}
        >
            <Button style={{ 'border': 'none', 'background': 'indigo', 'color': 'white', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>
    )
};
function ServiceButtonNotSelected_store(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderOpticalStore}
        >
            <Button style={{ 'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>

    )
};

function ServiceButtonSelected_clinic(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderEyeClinic}
        >
            <Button style={{ 'border': 'none', 'background': 'indigo', 'color': 'white', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>
    )
};
function ServiceButtonNotSelected_clinic(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderEyeClinic}
        >
            <Button style={{ 'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>

    )
};
function ServiceButtonSelected_exam(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderEyeExamInfo}
        >
            <Button style={{ 'border': 'none', 'background': 'indigo', 'color': 'white', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>
    )
};
function ServiceButtonNotSelected_exam(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderEyeExamInfo}
        >
            <Button style={{ 'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em' }} onClick={props.onClick}>
                {props.name}
            </Button>
        </OverlayTrigger>

    )
};


class TrashChooseServices extends Component {

    // continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    // }
    // back = e => {
    //     e.preventDefault();
    //     this.props.previousStep();
    // }

    // add = e => {
    //     // e.preventDefault();
    //     this.props.addService();
    //     // console.log(this.state.services)
    // }

    // handleSelected1() {
    //     if (this.state.isSelected1) {
    //         this.setState({ isSelected1: false })
    //     } else {
    //         this.setState({ isSelected1: true });
    //         // this.add();
    //     }
    // }
    // handleSelected2() {
    //     if (this.state.isSelected2) {
    //         this.setState({ isSelected2: false })
    //     } else {
    //         this.setState({ isSelected2: true })
    //     }
    // }
    // handleSelected3() {
    //     if (this.state.isSelected3) {
    //         this.setState({ isSelected3: false })
    //     } else {
    //         this.setState({ isSelected3: true })
    //     }
    // }
    // handleSelected4() {
    //     if (this.state.isSelected4) {
    //         this.setState({ isSelected4: false })
    //     } else {
    //         this.setState({ isSelected4: true })
    //     }
    // }
    // handleSelected5() {
    //     if (this.state.isSelected5) {
    //         this.setState({ isSelected5: false })
    //     } else {
    //         this.setState({ isSelected5: true })
    //     }
    // }
    // handleSelected6() {
    //     if (this.state.isSelected6) {
    //         this.setState({ isSelected6: false })
    //     } else {
    //         this.setState({ isSelected6: true })
    //     }
    // }
    // handleSelected7() {
    //     if (this.state.isSelected7) {
    //         this.setState({ isSelected7: false })
    //     } else {
    //         this.setState({ isSelected7: true })
    //     }
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         isSelected1: false, 
    //         isSelected2: false, 
    //         isSelected3: false, 
    //         isSelected4: false, 
    //         isSelected5: false, 
    //         isSelected6: false, 
    //         isSelected7: false, 
    //         services: []
    //     }
    //     this.handleSelected1 = this.handleSelected1.bind(this)
    //     this.handleSelected2 = this.handleSelected2.bind(this)
    //     this.handleSelected3 = this.handleSelected3.bind(this)
    //     this.handleSelected4 = this.handleSelected4.bind(this)
    //     this.handleSelected5 = this.handleSelected5.bind(this)
    //     this.handleSelected6 = this.handleSelected6.bind(this)
    //     this.handleSelected7 = this.handleSelected7.bind(this)
    // }

    // AddService(){
    //     // service.preventDefault();
    //     const { services } = this.state;
    //     // const service = this.service.value;
    //     this.setState({
    //         services: [...this.state.services, service]
    //     })
    //   };

    // render() {
    //     const { values, handleChange, addService } = this.props;
        // const { addService } = this.state;
        // const isSelected1 = this.state.isSelected1;
        // const isSelected2 = this.state.isSelected2;
        // const isSelected3 = this.state.isSelected3;
        // const isSelected4 = this.state.isSelected4;
        // const isSelected5 = this.state.isSelected5;
        // const isSelected6 = this.state.isSelected6;
        // const isSelected7 = this.state.isSelected7;
        // const names = ["Comprehensive Eye Exam", "Eyeglasses", "Contact lenses", "Orthokeratology treatment", "Lasik consultation and/or surgery", "Cataract consultation and/or surgery", "Consultation for other eye conditions"];
        // const listNames = names.map((name) => 
        //     <ServiceButtonSelected onClick={this.handleSelected} name={name}></ServiceButtonSelected>
        // );


//         let button1;
//         if (isSelected1) {
//             button1 = <ServiceButtonSelected_exam onClick={this.handleSelected1} name="Comprehensive Eye Exam" />
//         } else {
//             button1 = <ServiceButtonNotSelected_exam
//                 onClick={() => {
//                     this.handleSelected1();
//                     this.add();
//                 }} name="Comprehensive Eye Exam" value="Comprehensive Eye Exam" />
//             console.log(this.state.services)
//         }
//         let button2;
//         if (isSelected2) {
//             button2 = <ServiceButtonSelected_store onClick={this.handleSelected2} name="Eyeglasses" />
//         } else {
//             button2 = <ServiceButtonNotSelected_store onClick={this.handleSelected2} name="Eyeglasses" />
//         }
//         let button3;
//         if (isSelected3) {
//             button3 = <ServiceButtonSelected_store onClick={this.handleSelected3} name="Contact Lenses" />
//         } else {
//             button3 = <ServiceButtonNotSelected_store onClick={this.handleSelected3} name="Contact Lenses" />
//         }
//         let button4;
//         if (isSelected4) {
//             button4 = <ServiceButtonSelected_store onClick={this.handleSelected4} name="Orthokeratology treatment" />
//         } else {
//             button4 = <ServiceButtonNotSelected_store onClick={this.handleSelected4} name="Orthokeratology treatment" />
//         }
//         let button5;
//         if (isSelected5) {
//             button5 = <ServiceButtonSelected_clinic onClick={this.handleSelected5} name="Lasik consultation and/or surgery" />
//         } else {
//             button5 = <ServiceButtonNotSelected_clinic onClick={this.handleSelected5} name="Lasik consultation and/or surgery" />
//         }
//         let button6;
//         if (isSelected6) {
//             button6 = <ServiceButtonSelected_clinic onClick={this.handleSelected6} name="Cataract consultation and/or surgery" />
//         } else {
//             button6 = <ServiceButtonNotSelected_clinic onClick={this.handleSelected6} name="Cataract consultation and/or surgery" />
//         }
//         let button7;
//         if (isSelected7) {
//             button7 = <ServiceButtonSelected_clinic onClick={this.handleSelected7} name="Consultation for other eye conditions" />
//         } else {
//             button7 = <ServiceButtonNotSelected_clinic onClick={this.handleSelected7} name="Consultation for other eye conditions" />
//         }
//         return (
//             <div className="container">
//                 {/* {this.state.services} */}
//                 <h2 style={{ 'marginTop': '2em' }}>Choose Services (Select 1 or more)</h2>
//                 <i>Not sure? Mouse over for more information.</i>
//                 <br />
//                 {/* {listNames} */}

//                 <Row style={{ 'paddingTop': '1em' }}>
//                     <Col md={3}>
//                         {button1}
//                     </Col>
//                     <Col md={2}>
//                         {button2}
//                     </Col>

//                     <Col md={3}>
//                         {button3}
//                     </Col>
//                     <Col md={4}>
//                         {button4}
//                     </Col>

//                 </Row>
//                 <Row style={{ 'paddingTop': '3em' }}>
//                     <Col md={4}>
//                         {button5}
//                     </Col>
//                     <Col md={4}>
//                         {button6}
//                     </Col>
//                     <Col md={4}>
//                         {button7}

//                     </Col>
//                 </Row>
//                 <Row className='justify-content-center' style={{ 'paddingTop': '3em' }}>
//                     <Button onClick={this.back} style={{ 'background': 'indigo', 'border': 'None', 'marginRight': '1em' }}>
//                         Back
//                 </Button>
//                     <Button onClick={this.continue} style={{ 'background': 'indigo', 'border': 'None' }}>
//                         Next
//                 </Button>
//                 </Row>
//             </div>
//         )

//     }
// }

// export default TrashChooseServices;