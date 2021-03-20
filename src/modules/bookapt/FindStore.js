import React, { Component } from "react";
import { Row, Button, Card } from "react-bootstrap"

class FindStore extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  }
  constructor(props) {
    super(props);
    this.state = {
      title: "findStore"
    };
  }

  componentDidMount(){
    console.log(this.props.chosenServices)
  }
  
  render() {
    return (
    <div className="container" style={{'marginTop':'2em'}}>
      <h2>
        Find a store
      </h2>
        { this.props.chosenServices.map ((service, i) =>
          <Card style={{width: '18rem'}}>
            <Card.Header as="h6" variant="dark" key={i}>{ service }</Card.Header>
          </Card>
        )
        }

      
      <Row className='justify-content-center' style={{'paddingTop': '3em'}}>
          <Button onClick={this.back} style={{'background': 'indigo', 'border': 'None', 'marginRight': '1em'}}>
              Back
          </Button>
          <Button onClick={this.continue} style={{'background': 'indigo', 'border': 'None'}}>
              Next
          </Button>
      </Row>
    </div>

    );
  }
}

export default FindStore;