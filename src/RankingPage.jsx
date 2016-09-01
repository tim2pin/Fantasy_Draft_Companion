import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';
import ReactSortable from './SortableList.jsx'

var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');
console.log("player data:", playerData);

export default class RankingPage extends Component {
  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }
  
  render() {
    const playerList = playerData.map((player, i) => (<PlayerRankingItem
                data-id={player.PLAYER}
                key={i}
                rank={i + 1} 
                name={player.PLAYER} 
                teamPOS={player.TEAMPOS}
                passAtt={player.CA}
                passYds={player.PASSYDS}
                passTds={player.PASSTD}
                ints={player.INT}
                rushAtt={player.RUSH}
                rushYds={player.RUSHYDS}
                rushTds={player.RUSHTD}
                receptions={player.REC}
                recYds={player.RECYDS}
                recTds={player.RECTD}
                points={player.PTS}
                LYpassAtt={player.LYCA}
                LYpassYds={player.LYPASSYDS}
                LYpassTds={player.LYPASSTD}
                LYints={player.LYINT}
                LYrushAtt={player.LYRUSH}
                LYrushYds={player.LYRUSHYDS}
                LYrushTds={player.LYRUSHTD}
                LYreceptions={player.LYREC}
                LYrecYds={player.LYRECYDS}
                LYrecTds={player.LYRECTD}
                LYpoints={player.LYPTS} />));
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
        <Jumbotron style={{padding:'15px'}}>
          <h1>My Rankings</h1>
          <p>Customize your player rankings and take player notes.</p>
        </Jumbotron>
        <div>
          <ReactSortable
            tag="div" // Defaults to "div"
            >
              {playerList}
          </ReactSortable>
        </div>
      </div>
    )}
}
