import React from "react"

import {getFirstElement, getElement, getPrice} from "../../utilities/utilities"

import { Container, Button, Col, Row } from "react-bootstrap"
import ComputerCard from "../ComputerCard/ComputerCard"
import builds from "../../data/builds"

import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import rams from "../../data/rams"
import mobos from "../../data/mobos"
import psus from "../../data/psus"
import cases from "../../data/cases"
import storage from "../../data/storage"

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
    console.log(result)
    const card = result.map(x => {
        return(
            <Col><ComputerCard
                name={x.name}
                cpu={x.cpus ? getFirstElement(x.cpus, cpus) : ""}
                gpu={x.gpus ? getFirstElement(x.gpus, gpus) : ""}
                ram={x.rams ? getFirstElement(x.rams, rams) : ""}
                imgUrl={x.cases ? getElement(x.cases[0], cases).img : ""}
                price={
                    x.cpus && x.gpus && x.rams && x.mobos && x.psu && x.cases && x.storage?
                    
                    getPrice(x.cpus[0], cpus) + 
                    getPrice(x.gpus[0], gpus) + 
                    getPrice(x.rams[0], rams) +
                    getPrice(x.mobos[0], mobos) + 
                    getPrice(x.cases[0], cases) +
                    getPrice(x.psu[0], psus) + 
                    getPrice(x.storage[0], storage)
                    : ""
                }
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
                    {this.props.type === "Gaming" ? (GetRandomBuilds(builds, 2)) : (GetRandomBuilds(builds.filter(build => build.type === "special"), 1))}
                </Row>
            </Container>
        )
    }
}

export default MainPcCard