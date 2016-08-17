import React, { Component } from 'react';

// import $ from 'jquery';
// import PlayerRankingList from './PlayerRankingList.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';

var playerData = require('dsv!./assets/data/playerrankings.csv');


// import ReactReorderable from 'react-reorderable';

//buyxyguy6v9kxdrbrwx92pgy


// $("input[type=file]").parse({
//   config: {
//     complete: function(results, playerrankings) {
//       console.log("file is done!:", playerrankings, results);
//     }
//   },
//   complete: function() {
//     console.log("all files done!");
//   }
// });



console.log("player data:", playerData);




export default class RankingPage extends Component {

  render() {
    return (
      <div>
          {playerData.map(function(player) {
            return (
              <PlayerRankingItem rank={player.RANK} name={player.PLAYER} teamPOS={player.TEAMPOS}   />
              )
          })}

      </div>
    );
  }
}



//   constructor(props) {
//     super(props);
//       this.state= {
//         playerData: []
//       }
//       console.log(playerData);
//   }

// const getPlayer = function getPlayer(player) {
//   return $.ajax({
//     url: "http://api.sportradar.us/nfl-ot1/players/9634e162-5ff5-4372-b72b-ee1b0cb73a0d/profile.json?api_key=buyxyguy6v9kxdrbrwx92pgy",

    
//   })
// }

// getPlayer() {
  
// }