import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BlogModel from "./BlogModel";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from "../../config/config";

//include css
import '../../assets/css/Blog.css';

class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            content: "",
            displayImage: "",
            randoms: [],
            blogs: []
        }
    }

    // function to call to init
    componentDidMount() {
        let tokens = window.location.href.split('/');
        let slug = tokens[4];
        if (slug) {
          BlogModel.get(slug).then((res) => {
            this.setBlog(res.data);
            this.getRandom();
            this.getBlogs();
          }).catch((error) => {
            console.log(error);
          })
        } else {
          console.log("Blog not found");
        }
    }

    setBlog(blog) {
        this.setState({ title: blog.title, displayImage: blog.displayImage, author: blog.author, content: blog.content });
    }

    getRandom(){
        BlogModel.random().then((res) => {
            this.setState({randoms: res.data});
          }).catch((error) => {
            console.log(error);
          })
    }

    getBlogs(){
        BlogModel.list().then((res) => {
            this.setState({blogs: res.data});
          }).catch((error) => {
            console.log(error);
          })
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card blog-card">
                                            <h2 className="blog-title">{this.state.title}</h2>
                                            <h6 className="blog-author">{this.state.author}</h6>
                                            <div className="card-body">
                                                <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="card blog-card">
                                    <h2 className="blog-title text-center">Find an eyecare professional</h2>
                                    <img className="card-img-top" src="../assets/img/book-appointment.png" alt="Card image cap" />
                                    <div className="card-body text-center">
                                        <a className="btn btn-primary" href="/bookapt">Book an appointment</a>
                                    </div>
                                </div>
                                <br />
                                <div className="card blog-card">
                                    <h2 className="blog-title text-center">More Articles For You</h2>
                                    <div className="card-body">
                                        {this.state.blogs.map((blog, index) => {
                                            if(index < 6){
                                                return (
                                                    <div key={index} className="blog-recommend">
                                                        <h5 className="blog-recommend-title"><a href={"/blogs/" + blog.slug} style={{"color": "black"}}>{blog.title}</a></h5>
                                                        <p className="blog-recommend-text">{blog.author}</p>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <br />

                        <div className="row" style={{'background': "white", "padding": "20px"}}>
                            <div className="col-12">
                                <h2 className="section-title text-center" style={{"padding": "20px"}}>Continue Reading More Articles</h2>
                            </div>
                            {this.state.randoms.map((blog, index) => {
                                return (
                                    <div className="col-4">
                                        <Link to={"/blogs/" + blog.slug}>
                                            <div className="card article-card">
                                                <img className="card-img-top" src={blog.displayImage ? config['image_get_api'] + "/" + blog.displayImage : "../assets/img/blog_1.png"} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{blog.title}</h5>
                                                    <p className="card-text">{blog.author}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BlogDetail;