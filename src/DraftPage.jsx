import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import DraftPlayerList from './DraftPlayerList.jsx'
import $ from 'jquery';
// import jquery from 'jquery';
// import bootstrap from 'bootstrap';
// import jqueryui from 'jquery-ui';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class DraftPage extends Component {


  handleHomeClick(e){
    e.preventDefault()
    browserHistory.push('/')
  }
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
 

        <DraftPlayerList/>



        

      </div>
    );
  }
}
