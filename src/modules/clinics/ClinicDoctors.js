import React, { Component } from 'react';
import ClinicModel from './ClinicModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Clinics.css';
import config from '../../config/config';

class ClinicDoctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clinic: [],
            doctors: []
        }
    }

    componentDidMount() {
        let tokens = window.location.href.split('/');
        let slug = tokens[4];
        if (slug) {
            ClinicModel.get(slug).then((res) => {
                this.setState({ clinic: res.data });
            }).catch((error) => {
                console.log(error);
            })
        } else {
            console.log("List of doctors not found");
        }
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="profile-card text-center">
                                    <div class="thumb-xl member-thumb m-b-10 center-block">
                                        <img src={this.state.clinic.displayImage ? config['image_get_api'] + "/" + this.state.clinic.displayImage : "../assets/img/placeholder.png"} class="img-thumbnail" alt="clinic-image" style={{"border": "none"}}/>
                                        </div>
                                        <div class="">
                                            <h5 class="m-b-5">{this.state.clinic.name}</h5>
                                        </div>
                                        <ul class="list-reset text-left m-t-40" style={{
                                                "list-style-type": "none",
                                                "padding": 0
                                            }}>
                                            <li class="text-muted"><strong>Email:</strong> <span class="m-l-15">{this.state.clinic.email}</span></li>
                                            <li class="text-muted"><strong>Location:</strong> <span class="m-l-15">{this.state.clinic.address}</span></li>
                                            <li class="text-muted"><strong>Operation Hours:</strong> <span class="m-l-15">{this.state.clinic.start_working_time + " - " + this.state.clinic.end_working_time}</span></li>
                                        </ul>
                                        <ul class="social-links list-inline m-t-30">
                                            <li class="list-inline-item">
                                                <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="zmdi zmdi-facebook"></i></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="zmdi zmdi-twitter"></i></a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="GitHub"><i class="zmdi zmdi-github-alt"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="col-xl-9 col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="profile-wrapper">
                                            <h5 class="card-title">Description</h5>
                                            <div dangerouslySetInnerHTML={{__html: this.state.clinic.description}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        )
    }
}

export default ClinicDoctors;