// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import { Navbar, NavDropdown, FormControl, Button, Form, Carousel, Container, Row, Col, Image, Figure, CardDeck, Card, Dropdown, Breadcrumb, ThemeProvider, Table, Accordion, Overlay, OverlayTrigger, Tooltip} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// //include css
// import '../../assets/css/BookApt.css';
// import ChooseServices from './ChooseServices';
// import FindStore from './FindStore';
// import Schedule from './Schedule';
// import Info from './Info';
// import Confirmation from './Confirmation';


// function BookAptBtn(props){
//     return (
//         <Button onClick={props.onClick} style={{'background':'indigo', 'color': 'white'}}>Book an appointment</Button>
//     )
// }

// class BookApt extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleBookAptBtn = this.handleBookAptBtn.bind(this);
    //     this.state = {
    //         title: "bookApt",
    //         isBookAptBtnClicked: false

    //     }
    // }

    // handleBookAptBtn() {
    //     this.setState({isBookAptBtnClicked: true})
    // }
    
//     render() {
        // const isBookAptBtnClicked = this.state.isBookAptBtnClicked;
        // let componentShown;
        // if (isBookAptBtnClicked){
        //     componentShown = <ChooseServices></ChooseServices>
        // } else{
        //     componentShown= <BookAptBtn onClick={this.handleBookAptBtn}></BookAptBtn>
        // }
//         return(
//             this.App,
//             <div className='apt-container'>

            // <center><h2>The 1-minute booking</h2></center>

            // <Row style={{'paddingTop': '1em'}}>
            //     <Col>
            //     <center>
            //         <div className="circle">1</div>
            //         Choose services
            //     </center>
            //     </Col>
            //     <Col>
            //     <center>
            //         <div className="circle">2</div>
            //         Find a store
            //     </center>
            //     </Col>
            //     <Col>
            //     <center>
            //         <div className="circle">3</div>
            //         Pick a schedule
            //     </center>
            //     </Col>
            //     <Col>
            //     <center>
            //         <div className="circle">4</div>
            //         Your info
            //     </center>
            //     </Col>
            //     <Col>
            //     <center>
            //         <div className="circle">5</div>
            //         Confirmation
            //     </center>
            //     </Col>
            // </Row>

            // <Row className="justify-content-center" style={{'paddingTop': '3em'}}>
            //     {componentShown}
            // </Row>


                
//             </div>
//         );
//     }
// }


// export default BookApt;