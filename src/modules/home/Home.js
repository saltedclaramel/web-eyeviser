import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogModel from "../blog/BlogModel";
import ClinicModel from "../clinics/ClinicModel";
import config from "../../config/config";

//include css
import '../../assets/css/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "home",
            blogs: [],
            clinics: [],
            featured: []
        }
    }

    // function to call to init
    componentDidMount() {
        this.getBlog();
        this.getClinics();
    }

    // example of how to write a function
    getBlog(){
        BlogModel.list().then((res) => {
            this.setState({ blogs: res.data });
        }).catch((error) => {
            console.log(error);
        })
    }

    getClinics(){
        ClinicModel.list().then((res) => {
            this.setState({ clinics: res.data });
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Container style={{ marginTop: '2em' }}>
                    <Row>
                        <Col xs={7} style={{ marginLeft: '0em' }}>
                            <Carousel controls={true}>
                                {this.state.blogs.map((blog, index) => {
                                    if(index < 5){
                                        return (
                                            <Carousel.Item interval={5000}>
                                            <a href={'blogs/' + blog.slug}>
                                                <img
                                                    className="carousel-img"
                                                    src={blog.displayImage ? config['image_get_api'] + "/" + blog.displayImage : "https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg"}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3 style={{
                                                        "white-space": "nowrap",
                                                        "overflow": "hidden",
                                                        "text-overflow": "ellipsis"
                                                        }}>{blog.title}</h3>
                                                </Carousel.Caption>
                                            </a>
                                        </Carousel.Item>
                                        )}
                                    }
                                )}
                            </Carousel>
                        </Col>
                        <Col xs={5} style={{ background: "white" }}>
                            <div className="card blog-card">
                                <h2 className="blog-title text-center">Find an eyecare professional</h2>
                                <div className="text-center">
                                    <img className="card-img-top" src="../assets/img/book-appointment.png" alt="Card image cap" style={{"max-width":"200px", "display": "inline-block"}} />
                                </div>
                                <div className="card-body text-center">
                                    <a className="btn btn-primary" href="/bookapt">Book an appointment</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <section>
                    <div className="container">
                        <h2 className="section-title">Featured Eye A-Z Articles</h2>
                        <h6 className="section-subtitle">Learn more about refractive errors, eye diseases, eye care and more!</h6>
                        <div className="row">
                            {this.state.blogs.map((blog, index) => {
                                if(index < 6){
                                    return (
                                        <div className="col-md-3 col-6 m-b-10">
                                            <Link to={'blogs/' + blog.slug}>
                                            <div className="card quiz-card">
                                                <img className="card-img-top" src={blog.displayImage ? config['image_get_api'] + "/" + blog.displayImage : "../assets/img/blog_1.png"} alt="Blog image" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{blog.title}</h5>
                                                    <p className="card-text">{blog.author}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    )}
                                }
                            )}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="section-title">Discover Eye Care Clinics</h2>
                        <h6 className="section-subtitle"></h6>
                        <div className="row">
                            {this.state.clinics.map((clinic, index) => {
                                if(index < 6){
                                    return (
                                        <div className="col-md-3 col-6 m-b-10">
                                            <div className="card quiz-card">
                                                <img className="card-img-top" src={clinic.displayImage ? config['image_get_api'] + "/" + clinic.displayImage : "../assets/img/placeholder.png"} alt="Clinic image" style={{"max-height": "134px"
                                                }}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{clinic.name}</h5>
                                                    <p className="card-text">{clinic.address}</p>
                                                    <a href={"/clinics/" + clinic.slug} className="btn btn-primary quiz-try-btn">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                }
                            )}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="section-title text-center">Find an eye care professional</h2>
                        <div className="row">
                            <div className="col-12 ">
                                <div className="text-center image-with-text">
                                    Something like The Eye Observer one? Try to see what we can do like if we can insert the maps, if they can enter their address and find the nearest ones, or if we should just link it to the page
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;