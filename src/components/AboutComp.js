import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import bgAbout from "../assets/img/bg-about.png";
import bgKiri from "../assets/img/bg-kiri-about.png";
import bgKanan from "../assets/img/bg-kanan-about.png";

function AboutComp() {
  return (
    <div id='about' className='position-relative'>
        <img src={bgKiri} alt="" className='bg-kiri z-n1' />
        <Container className='pb-5'>
            <Row className='align-items-center'>
                <Col className='col-md col-12 mb-3 mb-md-0'><img src={bgAbout} alt="" className='img-fluid' data-aos="zoom-in"/></Col>
                <Col className='ms-3' data-aos="fade-left">
                    <h1 className='fw-bold mb-4'>ABOUT US</h1>
                    <p className='text-muted'>Selamat datang di revolusi bisnis modern! Kami hadir membawa inovasi dengan website layaknya ERP, memberdayakan pengusaha untuk mencatat setiap langkah bisnisnya, dari setiap barang yang bergerak hingga keuntungan harian.</p>
                </Col>
            </Row>
        </Container>
        <img src={bgKanan} alt="" className='bg-kanan z-n1' />
    </div>
  )
}

export default AboutComp