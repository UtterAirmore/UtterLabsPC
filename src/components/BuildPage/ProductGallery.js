import React, {useState, useEffect} from "react"

import {getElement} from "../../utilities/utilities"
import cases from "../../data/cases"
import {Container, Row, Image} from "react-bootstrap"

import styles from "./buildpage.module.scss"

function ProductGallery(props) {
    //eslint-disable-next-line
    const [selected, setSelected] = useState("0")
    const [currentCase, updateCase] = useState(getElement(props.build.cases[0], cases))

    const selectCase = (id) => {
        updateCase(getElement(id, cases))
    }

    useEffect(()=>{props.onChange(currentCase.price, [currentCase])})

    return(
        <Container className={styles.gallery}>
            <Image  className="mx-auto img-thumbnail h-75 w-75" src={currentCase.img} />
            <Row xl={5} lg={4} md={3} xs={2} className="justify-content-center">
            {props.build.cases.map((x, i) => {
                return(
                    <Product 
                        imgUrl={getElement(x, cases).img}
                        isSelected={i === selected ? "true" : "false"}
                        clickHandler={() => selectCase(x)}
                        />
                    )
                })
            }
            </Row>
        </Container>
        
    )
}

const Product = (props) => {
    return(
        <button
            className={styles.button}
            role="tab"
            tabIndex="0"
            aria-selected={props.isSelected}
            aria-expanded={props.isSelected}
            onClick={props.clickHandler}
        >
            <img className="img-fluid" src={props.imgUrl} alt=""/>
        </button>
    )
}

export default ProductGallery