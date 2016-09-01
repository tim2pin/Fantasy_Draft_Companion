import React, { Component } from 'react';
import DraftPlayerItem from './DraftPlayerItem.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';
var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');


export default class DraftPlayerList extends Component {

  render() {
    return(
        <div>
          {this.props.data-id}
        </div>
 
    )
  }
}

