import React from 'react';
import {Container, Button, Row, Col } from "react-bootstrap";
import heroImage from "../assets/img/hero-img.png";
import bgLogo from "../assets/img/bglogo.png";

function HeroComp() {
  return (
    <div id='home'>
        <img src={bgLogo} alt="" className='position-absolute top-0 z-n1 bg-logo' />
        <Container>
            <Row id='vh-responsive-50' className='mt-3 mt-md-0 align-items-center min-vh-100'>
                <Col className='col-12 col-lg'>
                    <h1 className='fw-bold judul animate__animated animate__zoomIn'>Bisnis lebih baik <br />dengan pencatatan bisnis modern</h1>
                    <p className='text-muted mb-4 animate__animated animate__zoomIn animate__delay-1s'>Pandangan baru untuk pengelolaan bisnis Anda! Kami hadir membawa inovasi dengan memudahkan pengusaha untuk mengelola persediaan, melacak transaksi, dan menghitung keuntungan. Sederhana, efisien, dan sepenuhnya sesuai kebutuhan Anda.</p>
                    <Button variant='primary' className='btn-custom px-4 animate__animated animate__fadeInUp animate__delay-1s'>EXPLORE SERVICE</Button>
                </Col>
                <Col>
                    <img src={heroImage} alt="" className='d-none d-lg-block' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroComp