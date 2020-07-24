import React from "react"

import {Card, Row, Col, Button, Badge, ListGroup} from "react-bootstrap"
import {Link} from "react-router-dom"

class ComputerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildUrl: `/${props.type}/${props.name}`
    }
  }

  render() {
    return (
      <div className="shadow-lg p-2 mb-2 rounded-lg text-center">
        <Card className="p-2">
          <Link to={this.state.buildUrl}>
            <Card.Img variant="top" src={this.props.imgUrl} />
          </Link>
          <Card.Body className="p-1">
            <Card.Title>{this.props.name}</Card.Title>
            <Row>
              <Col>
                <ListGroup className="pc-info" variant="flush">
                  <ListGroup.Item >{this.props.cpu}</ListGroup.Item>
                  <ListGroup.Item>{this.props.gpu}</ListGroup.Item>
                  <ListGroup.Item>{this.props.ram}</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row >
              <Col><Link to={this.state.buildUrl}><Button className="details-button float-left" variant="primary" >Details</Button></Link></Col>
              <Col className="price-button">
                <h2><Badge variant="success" style={{ float: "right" }}>{this.props.price}€</Badge></h2>

              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ComputerCard