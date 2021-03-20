import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import { Row, Col, Button } from 'react-bootstrap';

// using formik for validation
// values don't get passed to the next page
class EventForm extends Component{
    constructor(props){
        super(props);
    }
    
    validateName(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/[A-Za-z]/.test(value)){
            error = "Invalid name";
        } 
        return error;
    }
    validateOrg(value) {
        let error;
        if (!value) {
            error = 'Required';
        } 
        return error;
    }
    validateAge(value){
        let error;
        if (!value) {
            error = "Required";            
        } else if (!/^[0-9]{1,3}$/i.test(value) || value <= 0){
              error = "Invalid age";
            } 
          return error;
        }
    validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }
    validateContact(value){
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[0-9]{8}$/i.test(value)){
            error = "Invalid contact number";
        }
        return error;
    }

    render(){
        const { eventValues } = this.props;

        return(
            <div>
                <Formik
                    initialValues={{
                        firstName: eventValues.firstName,
                        lastName: eventValues.lastName,
                        organisation: eventValues.organisation,
                        age: eventValues.age,
                        email: eventValues.email,
                        contact: eventValues.contact,
                        checked: eventValues.checked,
                        invited: eventValues.invited,
                        outreach: eventValues.outreach,
                        consent: eventValues.consent
                    }}
                   
                >
       {({ errors, touched }) => (
        <Form style={{padding: 15}}>
             <Row>
                 <Col xs={6}>
                    First Name:<br/>
                    <Field name="firstName" validate={this.validateName} placeholder=" Enter first name" style={{width: '100%', height: 35}} />
                    {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
                 </Col>
                 <Col xs={6}>
                    Last Name:<br/>
                    <Field name="lastName" validate={this.validateName} placeholder=" Enter last name" style={{width: '100%', height: 35}}/>
                    {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
                 </Col>
             </Row>
             <Row style={{marginTop: 10}}>
                 <Col xs={6}>
                    Organisation:<br/>
                    <Field name="organisation" validate={this.validateOrg} placeholder=" Enter organisation" style={{width: '100%', height: 35}}/>
                    {errors.organisation && touched.organisation && <div>{errors.organisation}</div>}
                 </Col>
                 <Col xs={6}>
                    Age:<br/>
                    <Field name="age" validate={this.validateAge} placeholder=" Enter age" style={{width: '100%', height: 35}}/>
                    {errors.age && touched.age && <div>{errors.age}</div>}
                 </Col>
             </Row>
             <Row style={{marginTop: 10}}>
                 <Col xs={6}>
                    Email:<br/>
                    <Field name="email" validate={this.validateEmail} placeholder=" Enter email" style={{width: '100%', height: 35}}/>
                    {errors.email && touched.email && <div>{errors.email}</div>}
                 </Col>
                 <Col xs={6}>
                    Contact number:<br/>
                    <Field name="contact" validate={this.validateContact} placeholder=" Enter contact number" style={{width: '100%', height: 35}}/>
                    {errors.contact && touched.contact && <div>{errors.contact}</div>}
                 </Col>
             </Row>
             <Row style={{marginLeft: 5, marginTop: 10}}>
                <b>We will send out a reminder 24 hours before your appointment.</b>
             </Row>
             <Row style={{marginLeft: 5, marginTop: 10}}>
                Interested in:
             </Row>
             <label style={{marginLeft: 5}}>
              <Field type="checkbox" name="checked" value="One" style={{margin: 10}}/>
               All you wanted to know about myopia, presbyopia, astigmatism (Fri, 18 Dec, 12pm)
               <br/>
              <Field type="checkbox" name="checked" value="Two" style={{margin: 10}}/>
               Managing myopia progression for kids (Date TBC)
              <br/>
              <Field type="checkbox" name="checked" value="Three" style={{margin: 10}}/>
              How to choose the right eyewear (lenses/frames)
            </label>
            <Row>
                <Col xs={6}>
                    <div>I would like to invite Eyeviser to host a talk for my organisation</div>
                    <label>
                    <Field type="radio" name="invited" value="Yes" style={{margin: 5}} />
                    Yes
                    </label>
                    <br/>
                    <label>
                    <Field type="radio" name="invited" value="No" style={{margin: 5}}/>
                    No
                    </label>
                </Col>
                <Col xs={6}>
                <div>How did you learn about our event?</div>
                <Field component="select" id="outreach" name="outreach" style={{width: '100%', height: 35}}>
                    <option value="newsletter">Eyeviser Newsletter</option>
                    <option value="fb">Eyeviser Facebook</option>
                    <option value="ad">Facebook Ad</option>
                    <option value="ig">Eyeviser Instagram</option>
                    <option value="ff">Family/Friends</option>
                    <option value="others">Others</option>
                </Field>
                </Col>
            </Row>
            <div>Questions You Have For Our Eye Care Professionals/Remarks/Questions</div>
            <Field component="textarea" style={{width: 500, height: 150}} name="comment"></Field>
            <div>I consent to receiving notice of future eyecare talks, promotions or marketing collaterals from Eyeviser.</div>
            <label>
            <Field type="radio" name="consent" value="Yes" style={{margin: 5}}/>
            Yes
            </label>
            <br/>
            <label>
            <Field type="radio" name="consent" value="No" style={{margin: 5}}/>
            No
            </label>

           
           
         
 
           
            <br/>

         </Form>
       )}
     </Formik>
            <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
                <Button onClick={ this.props.signUp } style={{'background': 'indigo', 'border': 'None'}}>
                    Sign up
                </Button>
            </Row>
            </div>
        )
    }
}

export default EventForm;