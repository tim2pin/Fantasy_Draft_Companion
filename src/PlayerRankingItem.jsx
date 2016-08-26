import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Tooltip, Radio, Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion, Panel, Collapse, Well, Table, form, FormGroup, FormControl,Glyphicon } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';
import PlayerNote from './PlayerNote.jsx';
import SortableContainer from 'react-anything-sortable';

export default class PlayerRankingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:'',
      // value: '',
      // comments: [],
    }
  }

handleNewComment(comment) {
    chat.store({
      comment: comment, 
    })
  }

render() {
   return (
    <SortableContainer>
      <Button style={{width:'100%', textAlign:'left',fontSize:'14px',}} onClick={ ()=> this.setState.bind(this)({ open: !this.state.open })}>
         <strong> {this.props.rank} | {this.props.name} {this.props.teamPOS}</strong><Glyphicon style={{float:'right'}} glyph="align-justify" />
      </Button>
      <Collapse in={this.state.open}>
      <div>
    <Well>
    <Table striped responsive>
    <thead>
      <tr>
        <th>2016 Projections</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Passing</td>
        <td>{this.props.passYds} Yards</td>
        <td>{this.props.passTds} TDs</td>
        <td>{this.props.ints} INTs</td>
      </tr>
      <tr>
        <td>Rushing</td>
        <td>{this.props.rushAtt} Attempts</td>
        <td>{this.props.rushYds} Yards</td>
        <td>{this.props.rushTds} TDs</td>
      </tr>
      <tr>
        <td>Receiving</td>
        <td>{this.props.receptions} Receptions</td>
        <td>{this.props.recYds} Yards</td>
        <td>{this.props.recTds} TDs</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td></td>
        <td></td>
        <td><strong>{this.props.points} Points</strong></td>
      </tr>
    </tbody>
    </Table>
    <Table striped responsive>
    <thead>
      <tr>
        <th>2015 Stats</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Passing</td>
        <td>{this.props.LYpassYds} Yards</td>
        <td>{this.props.LYpassTds} TDs</td>
        <td>{this.props.LYints} INTs</td>
      </tr>
      <tr>
        <td>Rushing</td>
        <td>{this.props.LYrushAtt} Attempts</td>
        <td>{this.props.LYrushYds} Yards</td>
        <td>{this.props.LYrushTds} TDs</td>
      </tr>
      <tr>
        <td>Receiving</td>
        <td>{this.props.LYreceptions} Receptions</td>
        <td>{this.props.LYrecYds} Yards</td>
        <td>{this.props.LYrecTds} TDs</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td></td>
        <td></td>
        <td><strong>{this.props.LYpoints} Points</strong></td>
      </tr>
    </tbody>
    </Table>
    <Well>
        <PlayerNote onNewComment={this.handleNewComment.bind(this)} />      
    </Well>
    
    </Well>
      </div>
      </Collapse>
      </SortableContainer>
    );
  }
}


