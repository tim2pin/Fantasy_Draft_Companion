import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {notes} from './stores.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';

const playerData = require('dsv!./assets/data/playerRankingsProjections.csv');
console.log("player data:", playerData);


export default class RankingPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [],
  //   }
  //   this.setState({notes:notes})
  // }
  //   notes.watch().subscribe((results) => {
  //     this.setState({
  //       noteList: results,
  //     })
  //   })
  // }
  // handleNewNote(note) {
  //   notes.store({
  //     noteList: note
  //   })
  // }
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
          {playerData.map((player) => {
            return (
              <PlayerRankingItem 
                key={player.id}
                rank={player.RANK} 
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
                LYpoints={player.LYPTS}
                // notes={this.state.notes}
              />
            )
          })}
      </div>
    );
  }
}




