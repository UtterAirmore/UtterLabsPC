import React from "react"

import { Col, Row, Container, Image, Badge, ToggleButton , ButtonGroup} from "react-bootstrap"

import { useParams } from "react-router-dom";

import builds from "../../data/builds" 
import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import mobos from "../../data/mobos"

import BuildPageFooter from "./BuildPageFooter"

import styles from "./buildpage.module.css"

function getInfo(arr, db) {
    const buildInfo = arr.map(x => {
        const info = db.find(info => info.id === x)
        return (
            <Row className="m-2">
                <ToggleButton
                    type="radio"
                    variant="secondary"
                    name="radio"

                    >{info.name}
                </ToggleButton>
            </Row>
            
        )
    })
    return (buildInfo)
}

function partsInfo(type, db, part) {
    return(
        <Row>
            <Col xl={2} sm={3}><Badge className=" p-2 float-right" variant="success">{type}</Badge></Col>
                <ButtonGroup toggle>
                    {getInfo(part, db)}
                </ButtonGroup>
        </Row>

  )
}

function BuildInfo(props) {
    return(
        <div>
            {partsInfo("Processor", cpus, props.build.cpus)}
            {partsInfo("Video card", gpus, props.build.gpus)}
            {partsInfo("Motherboard", mobos, props.build.mobos)}
            {partsInfo("Ram", cpus, props.build.cpus)}

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
            <BuildPageFooter />
        </div>
    )
}

export default NewBuildPage