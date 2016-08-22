import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import PlayerRankingItem from './PlayerRankingItem.jsx';

const playerData = require('dsv!./assets/data/playerRankingsProjections.csv');
console.log("player data:", playerData);

//buyxyguy6v9kxdrbrwx92pgy

//RANK,PLAYER,TEAMPOS,CA,PASSYDS,PASSTD,INT,RUSH,RUSHYDS,RUSHTD,REC,RECYDS,RECTD,PTS

export default class RankingPage extends Component {
  render() {
    return (
      <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>Draft Depot</Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <MenuItem eventKey={2.1}>My Team</MenuItem>
        <MenuItem eventKey={2.2}>My Rankings</MenuItem>
        <MenuItem eventKey={2.3}>Draft Day</MenuItem>
        <MenuItem eventKey={2.4}>Research</MenuItem>
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
              />
            )
          })}
      </div>
    );
  }
}




