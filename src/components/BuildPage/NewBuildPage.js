import React from "react"

import { Col, Row, Container, Image, Badge} from "react-bootstrap"

import { useParams } from "react-router-dom";

import builds from "../../data/builds" 
import cpus from "../../data/cpus"
import gpus from "../../data/gpus"
import mobos from "../../data/mobos"
import rams from "../../data/rams"

import BuildPageFooter from "./BuildPageFooter"

import styles from "./buildpage.module.scss"

function getInfo(arr, db) {
    const buildInfo = arr.map(x => {
        const info = db.find(info => info.id === x)
        return (
                    <div className="inputGroup">
                        <input id={info.id} name="radio" type="radio" />
                        <label for={info.id}>{info.name}</label>
                    </div>            

        )
    })
    return (buildInfo)
}

function partsInfo(type, db, part) {
    return(
        <div>
            <h4>{type}</h4>
            <Col>
                <form>
                    {getInfo(part, db)}
                </form>
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
            <BuildPageFooter />
        </div>
    )
}

export default NewBuildPage