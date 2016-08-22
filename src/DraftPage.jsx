import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import DraftPlayerList from './DraftPlayerList.jsx'
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class DraftPage extends Component {
  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }
  handleMyTeamClick(e){
    e.preventDefault()
    browserHistory.push('/MyTeam')
  }

  handleRankingsClick(e){
    e.preventDefault()
    browserHistory.push('/Rankings')
  }

  handleDraftDayClick(e){
    e.preventDefault()
    browserHistory.push('/Draft')
  }

  handleResearchClick(e){
    e.preventDefault()
    browserHistory.push('/Research')
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
          <MenuItem onClick={this.handleMyTeamClick.bind(this)}>My Team</MenuItem>
          <MenuItem onClick={this.handleRankingsClick.bind(this)}>My Rankings</MenuItem>
          <MenuItem onClick={this.handleDraftDayClick.bind(this)}>Draft Day</MenuItem>
          <MenuItem onClick={this.handleResearchClick.bind(this)}>Research</MenuItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}
