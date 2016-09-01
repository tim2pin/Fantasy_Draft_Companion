import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import ResearchFetcher from './ResearchFetcher.jsx'
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';

export default class ResearchPage extends Component {
  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand onClick={this.handleHomeClick.bind(this)}>Draft Depot</Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        <MenuItem href="/MyTeam">My Team</MenuItem>
        <MenuItem href="/Rankings">My Rankings</MenuItem>
        <MenuItem href="/Draft">Draft Day</MenuItem>
        <MenuItem href="/Research">Research</MenuItem>
        <MenuItem href="http://smacktalk.tiy.mn">Smack Board </MenuItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
          <Jumbotron style={{paddingLeft:'15px'}}>
            <h1>Research</h1>
            <p>The latest Fantasy Football news and discussion.</p>
            </Jumbotron> 
        <ResearchFetcher />
      </div>
    );
  }
}
