import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function FooterComp() {
  return (
    <Container className='pb-3'>
        <Row>
            <Col>
                <div className='text-center'>Copyright © 2024. Designed By <span className='text-white'> Anggin Megantara</span></div>
            </Col>
        </Row>
    </Container>
  )
}

export default FooterComp