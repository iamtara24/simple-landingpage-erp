import React from 'react';
import {Container, Row, Col, Button } from "react-bootstrap";
import bgContact from "../assets/img/bg-contact.png";

function ContactComp() {
  return (
    <div id='contact' className='position-relative'>
        <Container className='mt-md-n10 mt-lg-0'>
            <Row className='align-items-center min-vh-100'>
                <Col className='col-lg-6' data-aos="fade-right">
                    <h3 className='fw-bold mb-4'>Diskusikan Kebutuhan Anda Sekarang! <br />Kami siap memberikan solusi pembiayaan dan proses kerja yang optimal.</h3>
                    <Button className='btn-custom px-5'>KONTAK KAMI</Button>
                </Col>
            </Row>
        </Container>
        <img src={bgContact} alt="" className='position-absolute img-fluid z-n1 bg-contact' />
    </div>
  )
}

export default ContactComp