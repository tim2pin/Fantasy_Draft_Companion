import React, { Component } from 'react';
// import $ from 'jquery';
// import accordion from 'jquery-ui';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import {Table, td, Row, Col, Button, Glyph, Pill} from 'elemental';
import globalStyles from './assets/styles/global.css';




export default class PlayerRankingItem extends Component {


  render() {

   return (
      <div>
        <Table>
          
          <thead>
            
<td>{this.props.rank} {this.props.name}<strong>{this.props.teamPOS}</strong></td> 
              
            </thead>
          
          <tbody>
            
            <tr style={{fontSize:'10px',}}>  
              <td>{this.props.passYds}</td>
              <td>{this.props.passTds}</td>
              <td>{this.props.ints}</td>
              <td>{this.props.rushAtt}</td>
              <td>{this.props.rushYds}</td>
              <td>{this.props.rushTds}</td>
              <td>{this.props.receptions}</td>
              <td>{this.props.recYds}</td>
              <td>{this.props.recTds}</td>
              <td>{this.props.points}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}


      {/*  <table>       BEFORE ELEMENTAL
          <h2> {this.props.name}
            <span> {this.props.teamPOS}</span>
          </h2>
        
            <span>2016 Projections:</span> 
      </table> */}

                // rank={player.RANK} 
                // name={player.PLAYER} 
                // teamPOS={player.TEAMPOS}
                // passAtt={player.CA}
                // passYds={player.PASSYDS}
                // passTds={player.PASSTD}
                // ints={player.INT}
                // rushAtt={player.RUSH}
                // rushYds={player.RUSHYDS}
                // rushTds={player.RUSHTD}
                // receptions={player.REC}
                // recYds={player.RECYDS}
                // recTds={player.RECTD}
                // points={player.PTS}






// constructor(props) {
//     super(props);
//     this.state = {
//       open: true
//     }
//   }


// toggleContent() {
//   this.props.toggleOne(this.props.key)
//   }

// getHeight() {
//   if(this.props.open) {
//     return "3em"
//   } else {
//     return "0"
//   }
// }

 

// var contentStyle = { height: getContentToggleHeight() };


  




// <player> {this.props.rank} {this.props.name} {this.props.teamPOS} </player>





