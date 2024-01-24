import React, {useState, useEffect} from 'react';
import {Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import logoClient from "../assets/img/client-logo.png";

function ModalCenter(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          LOGIN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">Login</Button>
        <Button variant='danger' onClick={props.onHide}>Batal</Button>
      </Modal.Footer>
    </Modal>
  );
}
const NavbarComp = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 3) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }
  useEffect(() => {
    changeBackgroundColor();
    
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className='sticky-top'>
      <Navbar expand="lg" variant='transparent' className={changeColor ? "nav-scroll" : ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logoClient} className="d-inline-block align-top" alt="" height="60px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#about" className='text-uppercase fw-bold text-black'>About</Nav.Link>
              <Nav.Link href="#pricing" className='text-uppercase fw-bold text-black'>Pricing</Nav.Link>
              <Nav.Link href="#contact" className='text-uppercase fw-bold text-black'>Contact</Nav.Link>
            </Nav>
            <div className='text-center'>
              <Button variant="outline-info" className='ms-1 btn-custom-outline px-5 text-uppercase mx-auto' onClick={() => setModalShow(true)}>Login</Button>
            </div>
          </Navbar.Collapse>
          <ModalCenter
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComp