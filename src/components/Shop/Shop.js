import React from "react"

import {getFirstElement, getElement, getPrice} from "../../utilities/utilities"

import {Container, Row, Col} from "react-bootstrap"

import ComputerCard from "../ComputerCard/ComputerCard"

import builds from "../../data/builds"
import studioBuilds from "../../data/studio-builds"

import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import rams from "../../data/rams"
import mobos from "../../data/mobos"
import psus from "../../data/psus"
import cases from "../../data/cases"
import storage from "../../data/storage"

function Shop(props) {
    
    if (props.type === "Gaming")
        var arr = builds;
    else if (props.type === "Studio")
        //eslint-disable-next-line
        var arr = builds.filter(build => build.type === "special")
    else if (props.type === "Special")
        //eslint-disable-next-line
        var arr = builds.filter(build => build.type ==="special")

    const buildInfo = arr.map(x => {
        return (
            <Col><ComputerCard 
                name={x.name}
                cpu={getFirstElement(x.cpus, cpus)}
                gpu={getFirstElement(x.gpus, gpus)}
                ram={getFirstElement(x.rams, rams)}
                imgUrl={getElement(x.cases[0], cases).img}
                price={
                    getPrice(x.cpus[0], cpus) + 
                    getPrice(x.gpus[0], gpus) + 
                    getPrice(x.rams[0], rams) +
                    getPrice(x.mobos[0], mobos) + 
                    getPrice(x.cases[0], cases) +
                    getPrice(x.storage[0], storage) + 
                    getPrice(x.psu[0], psus)

                }
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
