import React from "react"

import { Col, Row, Container, Image, Badge, ToggleButton , ToggleButtonGroup} from "react-bootstrap"

import { useParams } from "react-router-dom";

import builds from "../../data/builds" 
import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import mobos from "../../data/mobos"
import rams from "../../data/rams"

import BuildPageFooter from "./BuildPageFooter"

import styles from "./buildpage.module.css"

function getInfo(arr, db) {
    const buildInfo = arr.map(x => {
        const info = db.find(info => info.id === x)
        return (
            <Row><div className={styles.option}>{info.name}</div></Row>
        )
    })
    return (buildInfo)
}

function partsInfo(type, db, part) {
    return(
        <div>
            <h4>{type}</h4>
            <Col>
                {getInfo(part, db)}
            </Col>
        </div>

  )
}

function BuildInfo(props) {
    return(
        <div>
            {partsInfo("Processor", cpus, props.build.cpus)}
            {partsInfo("Video card", gpus, props.build.gpus)}
            {partsInfo("Motherboard", mobos, props.build.mobos)}
            {partsInfo("Ram", rams, props.build.rams)}

        </div>
    )
}



function NewBuildPage(props) {
    let { name } = useParams()

    let build =  builds.find(build => build.name === name)

    return (
        <div>
            <Container fluid className={styles.main}>
                <Row className="p-2">
                    <Col className="img-thumbnail">
                        <article>
                            <h1 className=" m-4 text-capitalize text-center"><Badge variant="success">{build.type}</Badge> {build.name}</h1>
                            <Container fluid className=" mb-2 img-thumbnail align-middle">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt lorem risus, non vehicula mi iaculis nec. Cras eros libero, aliquet sed augue et, faucibus efficitur felis. Aliquam in facilisis orci, vitae venenatis risus. Phasellus vitae mollis purus. Nunc lorem lacus, ultricies at sollicitudin sed, aliquam sed felis. Aliquam blandit elit ac scelerisque egestas. Sed commodo ipsum sit amet aliquam scelerisque.</p>
                            </Container>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col  xl={6} sm={6}><Image className={styles.image} src={build.imgUrl} /></Col>
                    <Col xl={5} sm={5}>
                        <BuildInfo build={build} />

                    </Col>
                </Row>
            </Container>
            <BuildPageFooter />
        </div>
    )
}

export default NewBuildPage