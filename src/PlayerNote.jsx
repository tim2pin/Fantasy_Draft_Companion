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
    chat.watch().subscribe((results) => {
      this.setState({
        comments: results,
      })
    })
  }
  handleDelete(e) {
      chat.remove(this.props.id)
    }

  handleChange(e) {
    console.log("value", e.target.value);
    this.setState({ value: e.target.value});
  }

  handleSubmit(e) {
  e.preventDefault();
    this.props.onNewComment.bind(this)(this.state.value);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <FormGroup>
        <FormControl
         type="text"
         placeholder="Player Notes"
         onChange={this.handleChange.bind(this)}
          />
        <FormControl.Feedback />
      <Radio inline style={{marginTop:'20px'}}>Target</Radio>
      <Radio inline style={{marginTop:'20px'}}>Avoid</Radio>
      </FormGroup>
      <Button bsStyle="primary" type="submit">
        Save
      </Button>
      <h4>Notes:</h4>
    </form>
    <div>
      {this.state.comments.map((note, i) => {
        return(
          <div>
            <div id={note.id} key={i}> {note.comment} <Button onClick={this.handleDelete.bind(this)} type="submit">delete</Button></div>
          </div>
        )}
      )} 
    </div>
    </div>
      )
  }
}
