import React, { Component } from 'react';
import DraftPlayerItem from './DraftPlayerItem';

export default class DraftPlayerList extends Component {
  render() {
    return (
      <div>
        <div>this the draft playr list:</div>
        <DraftPlayerItem />
        <DraftPlayerItem />
        <DraftPlayerItem />
      </div>
    );
  }
}
