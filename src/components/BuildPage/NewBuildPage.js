import React, {useState, useEffect} from "react"

import { Col, Row, Container, Badge} from "react-bootstrap"

import { useParams } from "react-router-dom";

import builds from "../../data/builds" 
import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import mobos from "../../data/mobos"
import rams from "../../data/rams"
import cases from "../../data/cases"
import psus from "../../data/psus"
import storage from "../../data/storage"

import BuildPageFooter from "./BuildPageFooter"
import PartsInfo from "./PartsInfo"
import ProductGallery from "./ProductGallery"

import styles from "./buildpage.module.scss"

import {getPrice} from "../../utilities/utilities"

function NewBuildPage(props) {

    let { name } = useParams()

    let build =  builds.find(build => build.name === name)

    const [cpuPrice, updateCpuPrice] = useState(getPrice(build.cpus[0], cpus))
    const [gpuPrice, updateGpuPrice] = useState(getPrice(build.gpus[0], gpus))
    const [moboPrice, updateMoboPrice] = useState(getPrice(build.mobos[0], mobos))
    const [ramPrice, updateRamPrice] = useState(getPrice(build.rams[0], rams))
    const [casePrice, updateCasePrice] = useState(getPrice(build.cases[0], cases))
    const [storagePrice, updateStoragePrice] = useState(getPrice(build.storage[0], storage))
    const [currentPrice, updateCurrentPrice] = useState(cpuPrice + gpuPrice + moboPrice + ramPrice + casePrice + storagePrice+ getPrice(build.psu[0], psus))

    const cpuUpdate = (price) => {
        updateCpuPrice(price)
    }
    const gpuUpdate = (price) => {
        updateGpuPrice(price)
    }
    const moboUpdate = (price) => {
        updateMoboPrice(price)
    }
    const ramUpdate = (price) => {
        updateRamPrice(price)
    }
    const storageUpdate = (price) => {
        updateStoragePrice(price)
    }
    const caseUpdate = (price) => {
        updateCasePrice(price)
    }
        
    //eslint-disable-next-line
    useEffect(()=>{updateCurrentPrice(cpuPrice + gpuPrice + moboPrice + ramPrice + casePrice + storagePrice + getPrice(build.psu[0], psus))}, [cpuPrice, gpuPrice, moboPrice, ramPrice, casePrice, storagePrice])

    return (
        <div>
            <Container fluid className={styles.main}>
                <Row className="p-2">
                    <Col className="img-thumbnail">
                        <article>
                            <h1 className=" m-4 text-capitalize text-center"><Badge variant="success">{build.type}</Badge> {build.name}</h1>
                            <Container fluid className=" mb-2 img-thumbnail align-middle">
                                
                            </Container>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col  xl={6} sm={6}><ProductGallery onChange={caseUpdate} build={build} /></Col>
                    <Col xl={5} sm={5}>
                        <PartsInfo onChange={cpuUpdate} type="Processor" db={cpus} part={build.cpus} />
                        <PartsInfo onChange={gpuUpdate} type="Video Card" db={gpus} part={build.gpus} />
                        <PartsInfo onChange={moboUpdate} type="Motherboard" db={mobos} part={build.mobos} />
                        <PartsInfo onChange={ramUpdate} type="Ram" db={rams} part={build.rams} />
                        <PartsInfo onChange={storageUpdate} type="Storage" db={storage} part={build.storage} />
                    </Col>
                </Row>
                <Row className={styles.bottomText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ac odio nec ultricies. Aenean ullamcorper neque sed eros tempus commodo. Donec sed odio blandit, elementum risus non, egestas nisi. Etiam malesuada cursus sem nec tempor. Suspendisse quis erat eget sapien efficitur mattis ut id ipsum. Nunc in erat ut mauris volutpat convallis. Integer suscipit eleifend nibh id finibus. Morbi condimentum elit nisl, at fermentum urna laoreet auctor. Sed auctor nec orci in blandit. Nulla mi mi, lacinia ac mattis eget, finibus eu magna. Curabitur fermentum sed velit at pulvinar. Proin volutpat magna eget sem egestas maximus. Donec quis lobortis dolor.

                    Aenean sollicitudin quam imperdiet, facilisis augue vitae, dignissim massa. Suspendisse dictum odio orci, sit amet tristique libero sagittis eu. Etiam eu egestas risus, in bibendum leo. Pellentesque sed turpis imperdiet, maximus ipsum in, elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel diam efficitur, bibendum sem ut, vulputate quam. Vestibulum convallis quam ac augue lobortis laoreet quis viverra erat. Etiam ex sapien, porttitor in pellentesque at, aliquet vitae massa. Phasellus lobortis eu metus nec placerat. Nam a tortor a nibh egestas tincidunt euismod sed tellus. Phasellus ex urna, vestibulum eget dolor in, tincidunt eleifend magna. Nam quam diam, dignissim a ligula vestibulum, accumsan ultricies arcu. Quisque convallis velit quis pharetra malesuada. Nullam augue lacus, commodo et rhoncus quis, dictum sit amet nibh.

                    Nulla sit amet varius tellus. Morbi augue nibh, dignissim id convallis et, auctor non leo. Aliquam erat volutpat. Pellentesque sollicitudin blandit volutpat. Cras luctus quam est, pulvinar faucibus dui consectetur ac. Mauris fermentum arcu semper, feugiat augue vitae, facilisis diam. Aenean iaculis mi a diam auctor, sit amet feugiat est maximus. Quisque venenatis convallis elit non fringilla. Curabitur nec hendrerit diam. Sed quis malesuada turpis. Duis tortor lectus, lobortis in lorem a, pellentesque auctor tortor. Proin feugiat dolor nulla, lobortis condimentum leo eleifend id. Nam nisl ante, pulvinar sed maximus eleifend, mattis nec metus. Curabitur nec purus nisl. Pellentesque quam tortor, convallis nec est sit amet, fringilla consequat ipsum.</p>
                </Row>
                <Row className={styles.bottomText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ac odio nec ultricies. Aenean ullamcorper neque sed eros tempus commodo. Donec sed odio blandit, elementum risus non, egestas nisi. Etiam malesuada cursus sem nec tempor. Suspendisse quis erat eget sapien efficitur mattis ut id ipsum. Nunc in erat ut mauris volutpat convallis. Integer suscipit eleifend nibh id finibus. Morbi condimentum elit nisl, at fermentum urna laoreet auctor. Sed auctor nec orci in blandit. Nulla mi mi, lacinia ac mattis eget, finibus eu magna. Curabitur fermentum sed velit at pulvinar. Proin volutpat magna eget sem egestas maximus. Donec quis lobortis dolor.

                    Aenean sollicitudin quam imperdiet, facilisis augue vitae, dignissim massa. Suspendisse dictum odio orci, sit amet tristique libero sagittis eu. Etiam eu egestas risus, in bibendum leo. Pellentesque sed turpis imperdiet, maximus ipsum in, elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel diam efficitur, bibendum sem ut, vulputate quam. Vestibulum convallis quam ac augue lobortis laoreet quis viverra erat. Etiam ex sapien, porttitor in pellentesque at, aliquet vitae massa. Phasellus lobortis eu metus nec placerat. Nam a tortor a nibh egestas tincidunt euismod sed tellus. Phasellus ex urna, vestibulum eget dolor in, tincidunt eleifend magna. Nam quam diam, dignissim a ligula vestibulum, accumsan ultricies arcu. Quisque convallis velit quis pharetra malesuada. Nullam augue lacus, commodo et rhoncus quis, dictum sit amet nibh.

                    Nulla sit amet varius tellus. Morbi augue nibh, dignissim id convallis et, auctor non leo. Aliquam erat volutpat. Pellentesque sollicitudin blandit volutpat. Cras luctus quam est, pulvinar faucibus dui consectetur ac. Mauris fermentum arcu semper, feugiat augue vitae, facilisis diam. Aenean iaculis mi a diam auctor, sit amet feugiat est maximus. Quisque venenatis convallis elit non fringilla. Curabitur nec hendrerit diam. Sed quis malesuada turpis. Duis tortor lectus, lobortis in lorem a, pellentesque auctor tortor. Proin feugiat dolor nulla, lobortis condimentum leo eleifend id. Nam nisl ante, pulvinar sed maximus eleifend, mattis nec metus. Curabitur nec purus nisl. Pellentesque quam tortor, convallis nec est sit amet, fringilla consequat ipsum.</p>
                </Row>
            </Container>
            <BuildPageFooter price={currentPrice}/>
        </div>
    )
}

export default NewBuildPage