import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';
import { Sortable, handleSort } from 'react-anything-sortable';

var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');
console.log("player data:", playerData);

export default class RankingPage extends Component {
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
          <Sortable onSort={handleSort}>
           {playerData.map((player, i) => {
            return ( <PlayerRankingItem

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
                LYpoints={player.LYPTS} />
                )})} 
          </Sortable>
          </div>
        )}
  }




