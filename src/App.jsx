import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//import globalStyles from '../assets/styles/global.css';
//import FontAwesome from '../assets/styles/font-awesome.css';
import $ from 'jquery';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

// import LoginPage from './LoginPage.jsx';
import MyTeam from './MyTeam.jsx'
import RankingPage from './RankingPage.jsx';
import DraftPage from './DraftPage.jsx';
import ResearchPage from './ResearchPage.jsx';
import PlayerRankingItem from './PlayerRankingItem.jsx';
import NoMatch from './NoMatch.jsx';

var Sortable = require('react-anything-sortable');
import { SortableContainer, handleSort } from 'react-anything-sortable';


class App extends Component {
  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
        <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand onClick={this.handleHomeClick.bind(this)}>Draft Depot</Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        <MenuItem href="/MyTeam">My Team</MenuItem>
        <MenuItem href="/Rankings">My Rankings</MenuItem>
        <MenuItem href="/Draft">Draft Day</MenuItem>
        <MenuItem href="/Research">Research</MenuItem>
        <MenuItem href="http://smacktalk.tiy.mn">Smack Board </MenuItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Jumbotron style={{padding:'15px'}}>
        <h1>Welcome to Draft Depot</h1>
        <p>Tired of listening to the so called 'experts' fantasy football advice? Draft Depot is the tool you've been looking for. Customize your own rankings and research to give yourself the upper hand on draft day.</p>
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
