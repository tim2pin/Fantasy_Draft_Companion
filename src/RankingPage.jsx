import React, { Component } from 'react';
// import $ from 'jquery';
// import PlayerRankingList from './PlayerRankingList.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';
var playerData = require('dsv!./assets/data/playerRankingsProjections.csv');


// import ReactReorderable from 'react-reorderable';

//buyxyguy6v9kxdrbrwx92pgy


//RANK,PLAYER,TEAMPOS,CA,PASSYDS,PASSTD,INT,RUSH,RUSHYDS,RUSHTD,REC,RECYDS,RECTD,PTS

console.log("player data:", playerData);

export default class RankingPage extends Component {
  render() {
    return (
      <div>
          {playerData.map(function(player) {
            return (
              <PlayerRankingItem 
                id={player.id}
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
              />
            )
          })}
      </div>
    );
  }
}

// const getPlayer = function getPlayer(player) {
//   return $.ajax({
//     url: "http://api.sportradar.us/nfl-ot1/players/9634e162-5ff5-4372-b72b-ee1b0cb73a0d/profile.json?api_key=buyxyguy6v9kxdrbrwx92pgy",


// //buyxyguy6v9kxdrbrwx92pgy

// export default class RankingPage extends Component {r
//     // constructor(props) {
//     // super(props);
//     //   this.state= {
//     //     playerData: []
//     //   }
    
//   buildSections(playerList) {
//     var playerList = playerData.map( function(player, index) {
//       return <PlayerRankingItem key={index} data={player} name={player.PLAYER} teamPOS={player.TEAMPOS} />
//     })
//     return playerList;
//   }

//   render() {
//     var playerList = this.buildSections(this.props.data);
//     return (
//       <div className="container">
//           {playerList}
//       </div>
//     );
//   }
// }

// // const getPlayer = function getPlayer(player) {
// //   return $.ajax({
// //     url: "http://api.sportradar.us/nfl-ot1/players/9634e162-5ff5-4372-b72b-ee1b0cb73a0d/profile.json?api_key=buyxyguy6v9kxdrbrwx92pgy",
