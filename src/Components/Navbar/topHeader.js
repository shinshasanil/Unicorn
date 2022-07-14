
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import './style.css'
import { BsTelephone } from  'react-icons/bs'
import { BsTruck } from  'react-icons/bs'


function TopHeader({  }) {


  return (
    <section className="header-top bg-white text-black">
      <Container>
        <Row className="justify-content-center align-items-center d-flex">
          <Col className="text-start">
            <Navbar.Brand href="/" className="logoText">
                Dealerz.
            </Navbar.Brand>
          </Col>
          <Col className="text-end d-md-flex flex-row justify-content-center align-items-center d-none ">
           <p  className="d-inline  pe-4"><BsTelephone className="me-2"/>Call Center</p>
           <p  className="d-inlne " ><BsTruck className="me-2"/>Shipping & Returns</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}



export default (TopHeader);
