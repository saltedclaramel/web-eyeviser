import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BlogModel from "./BlogModel";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../../config/config';

//include css
import '../../assets/css/Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "blog",
            blogs: []
        }
    }

    // function to call to init
    componentDidMount() {
        let tokens = window.location.href.split('/');
        let slug = tokens[4];
        if (slug) {
          BlogModel.category(slug).then((res) => {
            this.setState({ blogs: res.data });
          }).catch((error) => {
            console.log(error);
          })
        } else {
            BlogModel.list().then((res) => {
                this.setState({ blogs: res.data });
            }).catch((error) => {
                console.log(error);
            })
        }
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="card list-card">
                            <div className="card-body">
                                <h4>Category</h4>
                                <ul className="blog-cat-list">
                                    <li className="blog-cat-item"><a href="/blog">All Blogs</a></li>
                                </ul>
                                <b className="blog-cat-header">Eye Health</b>
                                <ul className="blog-cat-list">
                                    <li className="blog-cat-item"><a href="/blog/eye-disease">Eye Diseases</a></li>
                                    <li className="blog-cat-item"><a href="/blog/refractive-errors">Refractive Errors</a></li>
                                    <li className="blog-cat-item"><a href="/blog/eye-conditions">Eye Conditions</a></li>
                                </ul>
                                <br/>
                                <b className="blog-cat-header">Eyewear</b>
                                <ul className="blog-cat-list">
                                    <li className="blog-cat-item"><a href="/blog/blue-light">Blue Light</a></li>
                                    <li className="blog-cat-item"><a href="/blog/progressives">Progressives</a></li>
                                    <li className="blog-cat-item"><a href="/blog/sunglassess">Sunglasses</a></li>
                                </ul>
                                <br/>
                                <b className="blog-cat-header">Contact Lenses</b>
                                <ul className="blog-cat-list">
                                    <li className="blog-cat-item"><a href="/blog/soft-lenses">Soft Lenses</a></li>
                                    <li className="blog-cat-item"><a href="/blog/hard-lenses">Hard Lenses</a></li>
                                    <li className="blog-cat-item"><a href="/blog/multifocal-lenses">Multifocal Lenses</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-12">
                        <div className="card blog-card list-card">
                            {this.state.blogs.map((blog, index) => {
                                return (
                                    <div key={index} className="row no-gutters m-b-30">
                                        <div className="col-auto">
                                            <img src={config['image_get_api'] + "/" + blog.displayImage} className="img-thumbnail max-w-100" alt="" />
                                        </div>
                                        <div class="col">
                                            <div className="m-l-10">
                                                <h6 className="card-title m-0"><a href={"/blogs/" + blog.slug}>{blog.title}</a></h6>
                                                <small className="text-muted">{blog.author}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Blog;