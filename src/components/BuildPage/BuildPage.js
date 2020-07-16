import React from "react"

import { Col, Row, Container, Image, ListGroup, Button, Badge } from "react-bootstrap"

import builds from "../../data/builds"
import studioBuilds from "../../data/studio-builds"
import { useParams } from "react-router-dom";

import cpu from "../../media/cpu.png"
import gpu from "../../media/video-card.png"
import ram from "../../media/random-access-memory.png"
import mobo from "../../media/motherboard.png"
import cooling from "../../media/cooler.png"
import storage from "../../media/harddisk.png"
import psu from "../../media/power.png"

class BuildInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.build
    }

    render() {
        return (
            <div>
                <ListGroup className="text-center">
                    <ListGroup.Item><img src={cpu} alt="" />{this.state.cpu} </ListGroup.Item>
                    <ListGroup.Item><img src={gpu} alt="" />{this.state.videoCard}</ListGroup.Item>
                    <ListGroup.Item><img src={ram} alt="" />{this.state.ram}</ListGroup.Item>
                    <ListGroup.Item><img src={mobo} alt="" />{this.state.mobo}</ListGroup.Item>
                    <ListGroup.Item><img src={psu} alt="" />{this.state.psu}</ListGroup.Item>
                    <ListGroup.Item><img src={cooling} alt="" />{this.state.cooling}</ListGroup.Item>
                    <ListGroup.Item><img src={storage} alt="" />{this.state.storage}</ListGroup.Item>
                    <ListGroup.Item><Button disabled>{this.state.price}</Button></ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

function BuildPage(props) {
    let { name } = useParams()

    let build = (props.type === "gaming" || props.type === "special") ? builds.find(build => build.name === name) : studioBuilds.find(build => build.name === name)

    return (
        <Container fluid>
            <Row className="p-2">
                <Col className=" img-thumbnail">
                    <article>
                        <h1 className=" m-4 text-capitalize text-center"><Badge variant="success">{build.type}</Badge> {build.name}</h1>
                        <Container fluid className=" mb-2 img-thumbnail align-middle">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt lorem risus, non vehicula mi iaculis nec. Cras eros libero, aliquet sed augue et, faucibus efficitur felis. Aliquam in facilisis orci, vitae venenatis risus. Phasellus vitae mollis purus. Nunc lorem lacus, ultricies at sollicitudin sed, aliquam sed felis. Aliquam blandit elit ac scelerisque egestas. Sed commodo ipsum sit amet aliquam scelerisque.</p>
                        </Container>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col xl={3} sm={4}><Image className="img-fluid img-thumbnail " src={build.imgUrl} /></Col>
                <Col xl={9} sm={8}>
                    <BuildInfo build={build} />
                </Col>
            </Row>
        </Container>
    )
}

export default BuildPage