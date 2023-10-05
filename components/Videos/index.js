import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Video from "./Video"
function Videos({ data }) {
    return (
        <>
            <Container style={{ padding: "25px 0px" }}>
                <Row>
                    <Col md="12">
                        <h3 className="heading mb-3">Video Information</h3>
                        <Video videos={data} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Videos