import React, { Component, props } from 'react';
import { Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ServiceBtnData from './ServiceBtnData';

function ServiceBtn(props) {
    const chosenStyle = {
        'border': 'none', 
        'background': 'indigo', 
        'color': 'white', 
        'margin': '1em' 
    }
    
    const notChosenStyle = {
        'border': 'black 1px solid', 
        'background': 'white', 
        'color': 'black', 
        'margin': '1em' 
    }

    const details = props.tooltipInfo

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <ul>
                { details.map( (detail) =>
                    <li>{ detail }</li>
                ) }
            </ul>
        </Tooltip>
    );

    return (
        <div>
            <Col>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Button 
                        onClick= { () => {
                            props.handleChange( props.idNum );
                         } }
                        style = { props.chosen ? chosenStyle : notChosenStyle }
                    > { props.name }
                    </Button>
                </OverlayTrigger>
            </Col>
        </div>
    )
    
}

export default ServiceBtn