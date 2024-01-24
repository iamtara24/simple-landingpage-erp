import React from 'react';
import {Container, Row, Col, Card, Button } from "react-bootstrap";
import bgKiri from "../assets/img/bg-kiri-pricing.png";

function PricingComp() {
  return (
    <div id='pricing' className='position-relative'>
        <Container className='py-5'>
            <Row>
                <Col>
                    <div className='text-center' data-aos="fade-down">
                        <h1 className='fw-bold'>PRICING</h1>
                        <p className='text-muted'>Find Your Plan</p>
                    </div>
                    <Row className='justify-content-center pt-5 gap-3'>
                        <Col className='col-lg-3 col-12' data-aos="zoom-in">
                            <Card id='CardPrice' className='h-100 shadow' style={{ borderRadius: '25px' }}>
                            <Card.Body className='d-flex flex-column'>
                                <div className='d-flex gap-3 align-items-center mb-2'>
                                    <div className="bg-icon">
                                        <i className="fas fa-thumbs-up"></i>
                                    </div>
                                    <h6 className='text-uppercase fw-bold mb-0'>Tier 1</h6>
                                </div>
                                <h3 className='fw-bold'>BASIC</h3>
                                <h6 className='fw-bold'>IDR 1.700.000,- <span className='text-body-tertiary'>/ Year</span></h6>
                                <Card.Text className='pt-3'>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '1rem' }}>
                                        <li>Mencatat Barang Masuk</li>
                                        <li>Mencatat Barang Keluar</li>
                                        <li>Mencatat Hasil Keuntungan</li>
                                    </ul>
                                </Card.Text>
                                <div className='mt-auto mx-auto'><Button className='btn-custom px-4'>Try Free For 30 Days</Button></div>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-3 col-12' data-aos="zoom-in">
                            <Card id='CardPrice' className='h-100 shadow' style={{ borderRadius: '25px', background: 'linear-gradient(to bottom, #0366FE, #C796E0)' }}>
                            <Card.Body className='d-flex flex-column'>
                                <div className='d-flex gap-3 align-items-center mb-2'>
                                    <div className="bg-icon" style={{ backgroundColor:'#fff', color:'#000'}}>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h6 className='text-uppercase fw-bold mb-0 text-white'>Tier 2</h6>
                                </div>
                                <h3 className='fw-bold text-white'>BUSINESS</h3>
                                <h6 className='fw-bold text-white'>IDR 3.000.000,- <span className='text-white-50'>/ Year</span></h6>
                                <Card.Text className='pt-3'>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '1rem', color: '#fff' }}>
                                        <li>Mencatat Barang Masuk Dan Keluar</li>
                                        <li>Mencatat Hasil Keuntungan</li>
                                        <li>Dapat Menganalisa Hasil Penjualan Dengan Chart</li>
                                        <li>Support 7x24 Jam</li>
                                    </ul>
                                </Card.Text>
                                <div className='mt-auto mx-auto'><Button variant='light' className='px-4'>Try Free For 30 Days</Button></div>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col className='col-lg-3 col-12' data-aos="zoom-in">
                            <Card id='CardPrice' className='h-100 shadow' style={{ borderRadius: '25px' }}>
                            <Card.Body className='d-flex flex-column'>
                                <div className='d-flex gap-3 align-items-center mb-2'>
                                    <div className="bg-icon">
                                        <i className="fas fa-crown"></i>
                                    </div>
                                    <h6 className='text-uppercase fw-bold mb-0'>Tier 3</h6>
                                </div>
                                <h3 className='fw-bold'>ENTREPRENEUR</h3>
                                <h6 className='fw-bold'>IDR 5.500.000,- <span className='text-body-tertiary'>/ Year</span></h6>
                                <Card.Text className='pt-3'>
                                    <ul style={{ listStyleType: 'circle', paddingLeft: '1rem' }}>
                                        <li>Mencatat Barang Masuk Dan Keluar</li>
                                        <li>Mencatat Hasil Keuntungan</li>
                                        <li>Dapat Menganalisa Hasil Penjualan Dengan Chart</li>
                                        <li>Support 7x24 Jam</li>
                                        <li>Export Data Excel</li>
                                        <li>AI Prediksi Penghasilan</li>
                                    </ul>
                                </Card.Text>
                                <div className='mt-auto mx-auto'><Button className='btn-custom px-4'>Try Free For 30 Days</Button></div>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <img src={bgKiri} alt="" className='position-absolute left-0 bottom-0 z-n1' />
    </div>
  )
}

export default PricingComp