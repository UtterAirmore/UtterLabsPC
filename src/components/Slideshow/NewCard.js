import React from "react"

import {Container, Row, Col, ListGroup, Card} from "react-bootstrap"
import {Link} from "react-router-dom"

class NewCard extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row xl={2} xs={1}>
                    <Col xl={6} lg={6} md={6}>
                        <Link to="/shop">
                            <img className="w-25 img-thumbnail" src={this.props.imgUrl} alt=""/>
                        </Link>
                    </Col>
                    <Col xl={6} lg={6} md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.props.type} {this.props.name}</Card.Title>
                                <Row>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>{this.props.cpu}</ListGroup.Item>
                                            <ListGroup.Item>{this.props.videoCard}</ListGroup.Item>
                                            <ListGroup.Item>{this.props.ram}</ListGroup.Item>
                                            <ListGroup.Item>{this.props.motheboard}</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                    <Col>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item >{this.props.psu}</ListGroup.Item>
                                            <ListGroup.Item>{this.props.case}</ListGroup.Item>
                                            <ListGroup.Item>{this.props.storage}</ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            )
        }
                 

}

export default NewCard