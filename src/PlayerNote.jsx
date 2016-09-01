import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Tooltip, Radio, Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion, Panel, Collapse, Well, Table, form, FormGroup, FormControl,Glyphicon,Jumbotron } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';

export default class PlayerNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      comments: [],
    }
    chat.findAll({playerName:this.props.playerName}).watch().subscribe((results) => {
      this.setState({
        comments: results,
      })
    })
  }
  handleDelete(id, e) {
      chat.remove(id)
    }

  handleChange(e) {
    console.log("value", e.target.value);
    this.setState({ value: e.target.value});
  }

  handleSubmit(e) {
  e.preventDefault();
    this.props.onNewComment.bind(this)(this.state.value, this.props.playerName);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <FormGroup>
        <FormControl

          type="text"
          placeholder="Add a player note"
          onChange={this.handleChange.bind(this)}
          />
        <FormControl.Feedback />

      </FormGroup>
      <div style={{textAlign:'center'}}>
      <Button style={{fontSize:'15px', width:'100px', marginTop:'5px'}} bsSize="xsmall" bsStyle="primary" type="submit">
        Save Note
      </Button>
      </div>
      <h4 style={{textAlign:'center', marginTop:'25px'}}><u>Notes:</u></h4>
    </form>
    <div>
      {this.state.comments.map((note, i) => {
        console.log(note)
        return(
          <div>
            <div key={i} id={note.id}> {note.comment} <Button bsStyle='danger' bsSize='xsmall' onClick={this.handleDelete.bind(this, note.id)} type="submit">X</Button></div>
          </div>
        )}
      )} 
    </div>
    </div>
      )
  }
}
