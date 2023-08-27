import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const Navb = () => {
  return (
    <navb>
      <Navbar  style={{backgroundColor:"#7289da",marginBottom:"5px"}}>
      <Navbar.Brand as={NavLink} to="/home" style={{marginLeft:"10px",color:"white"}}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" style={{color:"white",cursor:"pointer"}}>Login</Nav.Link>
          <Nav.Link as={NavLink} to="/myprofile" style={{color:"white",cursor:"pointer"}}>MyProfile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </navb>
  )
}

export default Navb