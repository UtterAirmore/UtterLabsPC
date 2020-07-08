import React from "react"

import { Container, Row, Col } from "react-bootstrap"

class About extends React.Component {
    render() {
        return (
            <Container className="p-2 text-center" fluid>
                <Row>
                    <Col><iframe src="https://discordapp.com/widget?id=727855578717749354&theme=dark" 
                                width="350" 
                                height="500" 
                                allowtransparency="true" 
                                frameborder="0"></iframe>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About