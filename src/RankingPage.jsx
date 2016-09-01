import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';
import RankingList from './RankingList.jsx';
import ReactSortable from './SortableList.jsx';

var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');
console.log("player data:", playerData);

export default class RankingPage extends Component {
  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }
  
  render() {
    return(
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
        <Jumbotron style={{padding:'15px'}}>
          <h1>My Rankings</h1>
          <p>Customize your player rankings and take player notes.</p>
        </Jumbotron>
        <div>
          <RankingList />
        </div>
      </div>
    )}
}
