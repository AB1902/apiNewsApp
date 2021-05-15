import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import * as ReactBootstrap from "react-bootstrap"
// import Navbar from "react-bootstrap/Navbar"
// import Button from "react-bootstrap/Button"
// import FormControl from "react-bootstrap/FormControl"
// import Form from "react-bootstrap/Form"
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <div >
   		<ReactBootstrap.Navbar bg="primary" variant="dark">
          <ReactBootstrap.Navbar.Brand href="/">NEWS APP</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="mr-auto">
            <Link to="/politics"><ReactBootstrap.Nav.Link href="/politics">Global</ReactBootstrap.Nav.Link></Link>
            <Link to="/business"><ReactBootstrap.Nav.Link href="/business">Business</ReactBootstrap.Nav.Link></Link>
            <Link to="/sports"><ReactBootstrap.Nav.Link href="/sports">Sports</ReactBootstrap.Nav.Link></Link>
            <Link to="/entertainment"><ReactBootstrap.Nav.Link href="/entertainment">Entertainment</ReactBootstrap.Nav.Link></Link>
            
            <Link to="/tech"><ReactBootstrap.Nav.Link href="/tech">Tech</ReactBootstrap.Nav.Link></Link>
          </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar>
    </div>
  );
}

export default Nav;