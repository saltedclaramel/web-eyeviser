// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import { Navbar, NavDropdown, FormControl, Button, Form, Carousel, Container, Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FindStore from './FindStore';

// const renderOpticalStore = (props) => (
//   <Tooltip id="button-optical-store" {...props}>
//     Optical Store
//   </Tooltip>
// );

// const renderEyeClinic = (props) => (
//   <Tooltip id="button-eye-clinic" {...props}>
//     Eye doctor (Ophthalmologist) at eye clinic
//   </Tooltip>
// );

// const renderEyeExamInfo = (props) => (
//   <Tooltip id="button-eye-exam-info" {...props}>
//       <ul>
//           <li>Eye doctor (Ophthalmologist) at eye clinic</li>
//           <li>Primary eye care professional (Optometrist) at optical store</li>
//       </ul>
//   </Tooltip>
// );

// function FindStoreBtn(props){
//   return (
//       <Button onClick={props.onClick} style={{'background':'indigo', 'color': 'white'}}>Find a store</Button>
//   )
// }



// class ChooseServices extends Component {
//     constructor(props) {
//       super(props);
//       this.handleFindStoreBtn = this.handleFindStoreBtn.bind(this)
//       this.state = {
//         title: "chooseServices",
//         isFindStoreBtnClicked: false
//       };
//     }
    
//     handleFindStoreBtn() {
//       this.setState({isFindStoreBtnClicked: true})
//   }

//     render() {
//       const isFindStoreBtnClicked = this.state.isFindStoreBtnClicked;
//       let findstorebtnShown;
//       if (isFindStoreBtnClicked){
//         findstorebtnShown = <FindStore></FindStore>
//       } else{
//         findstorebtnShown = <FindStoreBtn onClick={this.handleFindStoreBtn}></FindStoreBtn>
//       }
//       return (
//         <div className = "container">
//           <center><h2 style={{'paddingTop':'1em'}}>Choose Services (Select 1 or more)</h2></center>
//             <i>Not sure? Mouse over for more information.</i>
//             <br/>
//             <Row style={{'paddingTop': '1em'}}>
//                 <Col md={3}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderEyeExamInfo}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Comprehensive Eye Exam</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
//                 <Col md={2}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderOpticalStore}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Eyeglasses</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
//                 <Col md={3}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderOpticalStore}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Contact lenses</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
//                 <Col md={4}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderOpticalStore}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Orthokeratology treatment</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
                
//             </Row>
//             <Row style={{'paddingTop': '3em'}}>
//                 <Col md={4}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderEyeClinic}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Lasik consultation and/or surgery</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
//                 <Col md={4}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderEyeClinic}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Cataract consultation and/or surgery</b>
//                         </Button>
//                     </OverlayTrigger>
//                 </Col>
//                 <Col md={4}>
//                     <OverlayTrigger
//                         placement="bottom"
//                         delay={{ show: 250, hide: 400 }}
//                         overlay={renderEyeClinic}
//                     >
//                         <Button style={{'border': 'black 1px solid', 'background': 'white', 'color': 'black', 'margin': '1em'}}>
//                             <b>Consultation for other eye conditions</b>
//                         </Button>
//                     </OverlayTrigger>
                
//                 </Col>
//             </Row>
//             {findstorebtnShown}
//         </div>
//       )
      
//     }
//   }
  
//   export default ChooseServices;