import React from "react"

import {Row, Col, Badge} from "react-bootstrap"

import styles from "./footer.module.css"

function BuildPageFooter() {
    return(
        <footer className={styles.footer}>
                <Row className={styles.content}>
                    <Col xl={7} sm ={7}></Col>
                    <Col xl={5} sm={5}><Badge className="p-3" variant="primary">Price</Badge></Col>
                </Row>
        </footer>
    )
}

export default BuildPageFooter