import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PartnerModel from "./PartnerModel";
import 'bootstrap/dist/css/bootstrap.min.css';

class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            content: "",
        }
    }

    // function to call to init
    componentDidMount() {
        let tokens = window.location.href.split('/');
        let slug = tokens[4];
        if (slug) {
          this.setState({editingMode: true});
          PartnerModel.get(slug).then((res) => {
            this.setPartner(res.data);
          }).catch((error) => {
            console.log(error);
          })
        } else {
          console.log("Blog not found");
        }
    }

    setPartner(partner) {
        this.setState({ name: partner.name, content: partner.content});
    }

    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center" style={{'background': "#FF6862", "padding": "10px", "color": "white"}}>
                                <h1>Promotions for {this.state.name}</h1>
                            </div>
                            <div className="col-12 text-center">
                                <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                            </div>
                        </div>
                        <br />
                    </div>
                </section>
            </div>
        );
    }
}

export default Partner;