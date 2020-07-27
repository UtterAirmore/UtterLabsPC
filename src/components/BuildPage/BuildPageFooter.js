import React from "react"

import {Row, Col} from "react-bootstrap"

import styles from "./footer.module.css"
import styled from "styled-components"

const Price = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: #D6D6D6;

    font-size: 30px;
    color: grey;
    
`

function BuildPageFooter(props) {
        return(
            <footer className={styles.footer}>
                <Row className={styles.content}>
                    <Col xl={7} sm ={7}>
                       
                    </Col>
                    <Col xl={4} sm={3}><Price>{props.price}€</Price></Col>
                </Row>
            </footer>
        )
    }


export default BuildPageFooter