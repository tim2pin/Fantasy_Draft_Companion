
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import globalStyles from './assets/styles/global.css';
import { stack as Menu} from 'react-burger-menu';
import Radium from 'radium';



import RankingPage from './RankingPage.jsx';
import DraftPage from './DraftPage.jsx';
import ResearchPage from './ResearchPage.jsx';
import NoMatch from './NoMatch.jsx';

let RadiumLink = Radium(Link);

const menuStyles = {
  //position & size of burger button
  bmBurgerButton: {
    position: 'fixed',
    width: '29px',
    height: '23px',
    left: '22px',
    top: '28px'
  },
  //color & shape of burger icon bars
  bmBurgerBars: {
    background: 'black'
  },
  //position & sizing of clickable cross button
  bmCrossButton: {
    height: '15px',
    width: '15px'
  },
  //color & shape of close button cross
  bmCross: {
    background: '#bdc3c7'
  },
  //general sidebar styles
  bmMenu: {
    background: 'lawngreen',
    padding: '2.5em 1.5em 0',
    fontSize: '1.6em'
  },
  //wrapper for item list
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  //styling of overlay
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const outerContainerStyle = {
  background: 'blue',
  height: '6em',
  marginTop: '-14.5px',
  marginLeft: '-10px',
  marginRight: '-10px'
}

const headerStyle = {
  textAlign: 'center',
  padding: '20px'
}

class App extends Component {
  render() {
    return (
      <div style={ outerContainerStyle }>
        <h2 style={ headerStyle }>Draft App </h2>
          <Menu styles={ menuStyles } width={ 225 } /*customBurgerIcon={ <img style={{width:"100px"}} src="http://icons.iconarchive.com/icons/capital18/ethereal/128/Misc-Football-icon.png" /> */ >
            <RadiumLink className="RankingPage" to="/Rankings">Player Rankings</RadiumLink>
            <RadiumLink className="DraftPage" to="/Draft">Draft Day</RadiumLink>
            <RadiumLink className="ResearchPage" to="/Research">Research Players</RadiumLink>
          </Menu>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history= { browserHistory }>
    <Route path="/" component= { App } />
    <Route path="/Rankings" component= { RankingPage } />
    <Route path="/Draft" component= { DraftPage } />
    <Route path="/Research" component= { ResearchPage } />
    <Route path="*" component= { NoMatch} />
  </Router>,
  document.getElementById('root')
);

