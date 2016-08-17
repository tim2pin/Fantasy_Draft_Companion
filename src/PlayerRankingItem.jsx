import React, { Component } from 'react';
import jquery from 'jquery';

export default class PlayerRankingItem extends Component {
  render() {
    return (
      <div>
          <player> {this.props.rank} {this.props.name} {this.props.teamPOS} </player>
      </div>
    );
  }
}
