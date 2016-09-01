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
      <Button bsSize="xsmall" bsStyle="primary" type="submit">
        Save
      </Button>
      <h4>Notes:</h4>
    </form>
    <div>
      {this.state.comments.map((note, i) => {
        console.log(note)
        return(
          <div>
            <div key={i} id={note.id}> {note.comment} <Button style={{float:'right'}} bsStyle='danger' bsSize='xsmall' onClick={this.handleDelete.bind(this, note.id)} type="submit">delete</Button></div>
          </div>
        )}
      )} 
    </div>
    </div>
      )
  }
}
