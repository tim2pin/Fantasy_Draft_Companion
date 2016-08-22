import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import globalStyles from './assets/styles/global.css';

import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

// import LoginPage from './LoginPage.jsx';
import MyTeam from './MyTeam.jsx'
import RankingPage from './RankingPage.jsx';
import DraftPage from './DraftPage.jsx';
import ResearchPage from './ResearchPage.jsx';
import NoMatch from './NoMatch.jsx';

class App extends Component {
  handleMyTeamClick(e){
    e.preventDefault()
    browserHistory.push('/MyTeam')
  }

  handleRankingsClick(e){
    e.preventDefault()
    browserHistory.push('/Rankings')
  }

  handleDraftDayClick(e){
    e.preventDefault()
    browserHistory.push('/Draft')
  }

  handleResearchClick(e){
    e.preventDefault()
    browserHistory.push('/Research')
  }


  render() {
    return (
      <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>Draft Depot</Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <MenuItem onClick={this.handleMyTeamClick.bind(this)} >My Team</MenuItem>
        <MenuItem onClick={this.handleRankingsClick.bind(this)} >My Rankings</MenuItem>
        <MenuItem onClick={this.handleDraftDayClick.bind(this)} >Draft Day</MenuItem>
        <MenuItem onClick={this.handleResearchClick.bind(this)} >Research</MenuItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history= { browserHistory }>
    <Route path="/" component= { App } />
    <Route path="/MyTeam" component= { MyTeam } />
    <Route path="/Rankings" component= { RankingPage } />
    <Route path="/Draft" component= { DraftPage } />
    <Route path="/Research" component= { ResearchPage } />
    <Route path="*" component= { NoMatch} />
  </Router>,
  document.getElementById('root')
);
