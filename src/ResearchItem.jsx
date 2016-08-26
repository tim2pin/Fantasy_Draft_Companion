import React, { Component } from 'react';

export default class ResearchItem extends Component {
  render() {
    return (
      <div style={{marginBottom:'20px',paddingLeft:'10px'}}>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    )
  }
}

