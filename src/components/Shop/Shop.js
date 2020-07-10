import React from "react"

import {Container, Row, Col} from "react-bootstrap"

import ComputerCard from "../ComputerCard/ComputerCard"

import builds from "../../data/builds"
import studioBuilds from "../../data/studio-builds"

function Shop(props) {
    
    if (props.type === "Gaming")
        var arr = builds;
    else if (props.type === "Studio")
        //eslint-disable-next-line
        var arr = studioBuilds;
    else if (props.type === "Special")
        //eslint-disable-next-line
        var arr = builds.filter(build => build.type ==="special")

    const buildInfo = arr.map(x => {
        return (
            <Col><ComputerCard 
                name={x.name}
                cpu={x.cpu}
                videoCard={x.videoCard}
                ram={x.ram}
                imgUrl={x.imgUrl}
                price={x.price}
                type={x.type}
          /></Col>
        )
    })

    return (
        <Container className="p-2" fluid>
            <Row xl={5} lg={4} md={3} xs={2}>
                {buildInfo}
            </Row>
        </Container>
        
    )
}

export default Shop
