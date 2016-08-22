import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Checkbox, Navbar, Nav, NavItem, NavDropdown, MenuItem, Accordion, Panel, Collapse, Well, Table, form, FormGroup, FormControl } from 'react-bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class PlayerRankingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:"",
    }
  }

// handleNoteChange(note){
//   var newValueArray = Array.prototype.slice.call(this.state.value);
//   newValueArray.push({value: note});
//   this.setState({value: newValueArray});
// }
// handleNoteSubmit(e){
//   e.preventDefault();
//   this.props.onSubmit.bind(this)(this.state.value)
// }
 

  render() {
   return (
    <div>
      <Button style={{width:'100%', textAlign:'left'}} onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.rank} | {this.props.name} {this.props.teamPOS}
        </Button>
        <Collapse in={this.state.open}>
        <div>
    <Well>
    <Checkbox inline>Target</Checkbox>
    <Checkbox inline>Avoid</Checkbox>
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
    <form>
      <FormGroup>
        <FormControl
         type="text"
         placeholder="Player Notes"
         value={this.state.value}
         
          />
      </FormGroup>
      <Button type="submit">
        Save
      </Button>
    </form>
    </Well>
      </div>
      </Collapse>
      </div>

    );
  }
}
