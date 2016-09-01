import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import DraftPlayerList from './DraftPlayerList.jsx';
//import PlayerRankingItem from './PlayerRankingItem.jsx';
import RankingList from './RankingList.jsx';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import {chat} from './stores.jsx';


export default class DraftPage extends Component {
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
          <h1>My Draft</h1>
          <p>Draft players to your team and remove already drafted players</p>
        </Jumbotron>
        <RankingList />
      </div>
    );
  }
}


// {PlayerRankingItem.map((player) => (
//             <DraftPlayerList
//               name={player.name}



//              />))}