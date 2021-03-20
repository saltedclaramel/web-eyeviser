import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../config/config';

//include css
import '../../assets/css/Clinics.css';
import ClinicModel from './ClinicModel';

class Clinics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "clinics",
            host: config['WEB_HOSTS'],
            clinics: []
        }
    }

    // function to call to init
    componentDidMount() {
        ClinicModel.list().then((res) => {
            this.setState({clinics: res.data});
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card clinic-card list-card">
                    <div className="row">
                    {this.state.clinics.map ( clinic => {
                        return (
                            <div className="col-6 col-lg-4 m-b-30">
                                <img src={clinic.displayImage ? config['image_get_api'] + "/" + clinic.displayImage : "../assets/img/placeholder.png"} className="img-thumbnail max-w-120" alt="clinic logo" />
                                <div class="m-l-10" style={{"margin-bottom": "10px"}}>
                                    <h5 class="card-title mt-1 mb-0">{clinic.name}</h5>
                                    <small class="text-muted">{clinic.address}</small>
                                </div>
                                <Button style={{
                                        background: '#004AAD', 
                                        border: 0,
                                        width: "100%"
                                    }}
                                    
                                    href = { "/clinics/" + clinic.slug }
                                    >View</Button>
                            </div>
                        )
                    } ) }
                    </div>
                </div>
            </div>
        );
    }
}

export default Clinics;
