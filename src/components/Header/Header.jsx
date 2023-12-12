import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="">
      <Navbar className="Header navbar-custom center" expand="lg" collapseOnSelect>
      </Navbar>
    </div>
    
  )
}

export default Header