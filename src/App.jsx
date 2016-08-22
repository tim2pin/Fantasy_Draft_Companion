import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import globalStyles from './assets/styles/global.css';

import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
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
        <MenuItem onClick={this.handleMyTeamClick.bind(this)}>My Team</MenuItem>
        <MenuItem onClick={this.handleRankingsClick.bind(this)}>My Rankings</MenuItem>
        <MenuItem onClick={this.handleDraftDayClick.bind(this)}>Draft Day</MenuItem>
        <MenuItem onClick={this.handleResearchClick.bind(this)}>Research</MenuItem>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      <Jumbotron>
        <h1>Welcome to Draft Depot</h1>
        <p>Lorem ipsum Occaecat laborum Excepteur sunt esse sit culpa dolore mollit nisi aliquip amet fugiat nisi ut ut nulla cillum elit mollit ut dolore aute dolore aliquip voluptate.Lorem ipsum Dolor pariatur ea ea commodo Duis in aliquip consectetur veniam nisi aute. Lorem ipsum Aliqua velit nostrud in Ut exercitation aute in ea consequat magna quis dolore dolor quis sed cupidatat ullamco Excepteur laborum culpa nulla sit labore in sint esse exercitation ad sed in dolor reprehenderit.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
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
