import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container footer-section">
                <div className="row">
                    <div className="col-md-4 col-12 m-b-10">
                        <Link to={"/"}>
                            <img src="../assets/img/logo.png" className="img-fluid" alt="Responsive image" />
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 m-b-10">
                        <h4 className="footer-header">Eye A-Z</h4>
                        <div className="row">
                            <div className="col-6">
                                <ul className="footer-sitelist">
                                    <li><Link to={"/blog/eye-disease"}>Eye Diseases</Link></li>
                                    <li><Link to={"/blog/refractive-errors"}>Refractive Errors</Link></li>
                                    <li><Link to={"/blog/eye-conditions"}>Eye Conditions</Link></li>
                                    <li><Link to={"/blog/blue-light"}>Blue Light</Link></li>
                                    <li><Link to={"/blog/progressives"}>Progressives</Link></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="footer-sitelist">
                                    <li><Link to={"/blog/sunglassess"}>Sunglasses</Link></li>
                                    <li><Link to={'/blog/soft-lenses'}>Soft Lenses</Link></li>
                                    <li><Link to={'/blog/hard-lenses'}>Hard Lenses</Link></li>
                                    <li><Link to={'/blog/multifocal-lenses'}>Multifocal Lenses</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 m-b-10">
                        <div className="row">
                            <div className="col-6">
                                <h4 className="footer-header">Others</h4>
                                <ul className="footer-sitelist">
                                    <li><Link to={'/about'}>About Us</Link></li>
                                    <li><Link to={'/bookapt'}>Book Appointment</Link></li>
                                    <li><Link to={'/clinics'}>Clinics</Link></li>
                                    <li><Link to={'/qna'}>Q&A</Link></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h4 className="footer-header">Reach us</h4>
                                <ul className="footer-sitelist">
                                    <li>hello@eyeviser.com</li>
                                    <li>+65 8850 1568</li>
                                    <li>Singapore</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 footer-sign-off">
                        <p>© 2021 Eyeviser. All rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;