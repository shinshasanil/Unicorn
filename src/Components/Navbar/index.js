import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import { FiHeart } from  'react-icons/fi'
import {BsCart2 } from  'react-icons/bs'
import { BsPerson } from  'react-icons/bs'
import { IoMdNotificationsOutline } from  'react-icons/io';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux'
import { Badge } from "@mui/material";
import {FiSearch} from 'react-icons/fi'


const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.value)
  const wishlistCount = useSelector((state) => state.wishlist.value)


  return (
    <Navbar expand="lg" className="boxShadaw p-3 bgLightBlue">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-16 text-500 text-dark float-start">
            <Nav.Link className="text-dark" href="/shop">Shop</Nav.Link>
            <Nav.Link className="text-dark" href="/promo">Promo</Nav.Link>
            <Nav.Link className="text-dark" href="/about">About</Nav.Link>
            <Nav.Link className="text-dark" href="/blog">Blog</Nav.Link>
          </Nav>
           <div className="input-group  w-50 container">
                <input type="text" className="form-control" placeholder="Search what you need" aria-label="Insert your mail here" aria-describedby="basic-addon2"/>
                <span className="input-group-text bg-orange text-white p-1" id="basic-addon2">
                    <FiSearch/>
                </span>
            </div>
          <div className="d-md-flex mx-auto d-none">
          <Badge badgeContent={wishlistCount} color="primary" className="me-3">
            <FiHeart   style={{fontSize:"20px"}}></FiHeart>
          </Badge>
          <Badge badgeContent={cartCount} color="primary"  className="me-3">
            <BsCart2  style={{fontSize:"20px"}}>
            </BsCart2>
          </Badge>
          
          <BsPerson  className="me-3" style={{fontSize:"20px"}}/>
          <IoMdNotificationsOutline style={{fontSize:"20px"}}/>
          </div>

        
          
         
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  );
};

export default NavBar;
