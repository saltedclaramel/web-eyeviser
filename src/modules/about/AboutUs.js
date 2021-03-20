import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavDropdown, FormControl, Button, Form, Carousel, Container, Row, Col, Image, Figure, CardDeck, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//include css
import '../../assets/css/AboutUs.css';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "aboutUs"
        }
    }

    // function to call to init
    componentDidMount() {
        this.example();
    }

    // example of how to write a function
    example() {
        console.log("hello");
    }

    render() {
        return (
            <div>
                <div class="col-12 image-overlay-element text-center">
                    <div class="image-overlay"></div>
                    <div class="col-12 image-overlay-text">
                        <h4 style={{color: "white"}}>80% of blindness is treatable and preventable.</h4>
                        <p>My eye matters is dedicated to promoting better eye health and early detection of eye illnesses by bringing eye exams, eye education and good-fitting eyewear to your doorstep.</p>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <h1 className="section-title text-center">Our services</h1>
                        <h5 className="section-subtitle"></h5>
                        <div className="row">
                            <div class="col-4">
                                <div className="card quiz-card text-center">
                                    <div className="card-body">
                                        <img className="card-img-top" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png" alt="Card image cap" style={{ width: '50px', height: '50px', margin: '20px' }} />
                                        <h5 className="card-title">Eye Exams</h5>
                                        <p className="card-text">We provide comprehensive eye exams,  and generate individual reports for patients and aggregated data for employers and insurers.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card quiz-card text-center">
                                    <div className="card-body">
                                        <img className="card-img-top" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png" alt="Card image cap" style={{ width: '50px', height: '50px', margin: '20px' }} />
                                        <h5 className="card-title">Good-Fitting Eyewear</h5>
                                        <p className="card-text">No one’s face shape, skin tone, visual demands or lifestyle is the same. Our frames and lens selection quiz will suggest the most suitable eyewear for you. Our store offers quality eye wear handpicked by industry experts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card quiz-card text-center">
                                    <div className="card-body">
                                        <img className="card-img-top" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png" alt="Card image cap" style={{ width: '50px', height: '50px', margin: '20px' }} />
                                        <h5 className="card-title">Eye Education </h5>
                                        <p className="card-text">Learn how to take care of your eyes. Find out about the signs and risk factors of common eye diseases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="section-title text-center">Our Story</h1>
                    <h5 className="section-subtitle"></h5>
                    <div class="container">
                        <p>Our founder,  was 13 when her father’s retina was detached at 42 years old. Thanks to emergency surgery, he avoided blindness and can see his grandchildren’s beautiful smiles today. In 2013, she worked at the world’s largest manufacturer of spectacle lenses to bring vision care to the 2.5 billion people worldwide who needed eyeglasses but never had them. From grandmothers in rural Sichuan, China, to labourers in Gulbarga, India, she witnessed a profound lack of awareness of eye health. Most had never checked their eyes before, much less had access to a pair of eyeglasses. In 2016, she led the global category development of myopia, which will affect half the world or 5 billion people in 2050. She learnt the importance of educating parents about myopia management solutions for their children, so they would not be at risk of blindness in later life, like her father did as a high myope. Recent studies have shown that more than 8 in 10 adults do not have regular eye exams, until they experience serious vision issues. My Eye Matters believes how well you see matters.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default AboutUs;