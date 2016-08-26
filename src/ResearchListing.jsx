import React, { Component } from 'react';
import ResearchItem from './ResearchItem.jsx';

export default class ResearchListing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.items.map(function(item, i) {
          return (
            <div>
              <ResearchItem key={i} title={item.data.title} url={item.data.url} />
            </div>
          )
        })}
      </div>
    )
  }
}