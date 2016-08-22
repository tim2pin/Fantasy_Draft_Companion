import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';





export default class LoginPage extends Component {
  render() {
    return (
      <div>
      <Navbar.fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>Draft Companion</Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={3.1} href="/Rankings">My Rankings </NavItem>
        
        <NavItem eventKey={3.2}>Draft Day</NavItem>
        
        <NavItem eventKey={3.3}>Research</NavItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar.fixedTop>
      <div>logiiiiiiiiiiiiin pagggggge</div>
      </div>
    );
  }
}
