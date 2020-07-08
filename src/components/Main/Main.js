import React from "react"

import {Container, Col, Row} from "react-bootstrap"

//import Slideshow from "../Slideshow/Slideshow"
import MainPcCard from "./MainPcCard"


class Main extends React.Component {
    
    render() {
        return (
            <Container fluid className="p-2">
                <Row>
                    <Col><MainPcCard type="Studio"  /></Col>
                    <Col><MainPcCard type="Gaming" /></Col>
                </Row>
            </Container>
        )
    }
}

export default Main