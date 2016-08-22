import React, { Component } from 'react';
import $ from 'jquery';
import ResearchListing from './ResearchListing.jsx';

export default class ResearchFetcher extends Component {
  constructor(props) {
    super(props);
    console.log('in fetcher', props);
    this.state = {
      items: [],
    }
  }
  getSubredditData() {
    $.ajax({
      url: "https://www.reddit.com/r/" + "FantasyFootball" + ".json?jsonp=?",
      jsonp: "callback",
      dataType: "jsonp",
      success: (response) => {
          this.setState({items: response.data.children});
      }
    });
  }
  render() {
    this.getSubredditData();
    return (
      <div>
        <ResearchListing items={this.state.items} />
      </div>
    )
  }
}