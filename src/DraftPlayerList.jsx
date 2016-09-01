import React, { Component } from 'react';
import DraftPlayerItem from './DraftPlayerItem.jsx';
var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');


export default class DraftPlayerList extends Component {

  render() {
    return(
        <div>
          <DraftPlayerItem />
        </div>
 
    )
  }
}

