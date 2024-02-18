import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavImage from '../Components/NavImage.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../JS/Actions/user";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state)=> state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="shark">
        <Container>
          <img src={NavImage} alt='icon'/>
          <Navbar.Brand href="/">To-DO</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth ? (
              <>
              
            <Nav.Link href="/tasks">my tasks</Nav.Link>
            <Nav.Link href="/" onClick={() => dispatch(logout())}>logout</Nav.Link>
            &nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;&nbps;
            <Nav.Link className='welcome'>Welcome {user && user.firstname}</Nav.Link>
            </>
            )
            : (
              <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
            
          </Nav>
        </Container>
      </Navbar>
      </div>
      
    
  );
  }

export default NavBar