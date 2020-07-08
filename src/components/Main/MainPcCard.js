import React from "react"

import { Container, Button, Col, Row } from "react-bootstrap"
import ComputerCard from "../ComputerCard/ComputerCard"
import builds from "../../data/builds"
import studioBuilds from "../../data/studio-builds"


function GetRandomBuilds(arr, num) {
    var result = new Array(num),
        len = arr.length,
        taken = new Array(len);
    if (num>len)
        throw new RangeError("More elements than avaliable");
    while(num--) {
        var x = Math.floor(Math.random() * len);
        result[num] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }

    const card = result.map(x => {
        return(
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

    return card;
}

class MainPcCard extends React.Component {
    
    render() {
        return (
            <Container className="shadow-lg p-2 mb-2 rounded-lg text-center align-baseline" fluid>
                <Row className="pb-1" xl={2} xs={1}>
                    <Col><h3>{this.props.type} Computers</h3></Col>
                    <Col>{this.props.type === "Gaming" ? (<Button href="/gaming">View All</Button>) : (<Button href="/studio">View All</Button>)}</Col>
                </Row>
                <Row xl={2} lg={2} md={2} xs={1}>
                    {this.props.type === "Gaming" ? ( GetRandomBuilds(builds, 4) ) : (GetRandomBuilds(studioBuilds, 4))}
                </Row>
            </Container>
        )
    }
}

export default MainPcCard