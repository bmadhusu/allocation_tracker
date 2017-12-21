import React, { Component } from 'react';


class ResourcePicker extends Component {

  constructor() {
    super();
    const peeps = window.peeps;
    this.state = {
    	peeps: peeps
    };
  }

  validateInput(val, amt) {

  	
  	if (!((Object.keys(this.state.peeps)).includes(val)) ) {
  		alert("You must select a valid resource");
  		return false;
  	}

  	
  	if (isNaN(amt) || amt <= 0) {
  		alert("You must enter a positive CHF value");
  		return false;
  	}

  //	this.refs.resources.find("option[value='"+val+"']");

  	return true;

  }

  handleAddResource() {

  	var val = this.refs.peep.value;
  	var amt = this.refs.amt.value;

  	if (!this.validateInput(val, amt))
  		return;

  	var robj = {name: val, amt: amt};
     console.log(robj);
  	this.props.addEntry(robj);

  }

  handleClearTable() {

  	this.props.clearTable();
  }

  handleAmtToSpend() {

  	if (isNaN(this.refs.target_amt.value) || this.refs.target_amt.value <= 0)
  		alert("No Good!");

  	else
  		this.props.handleAmt(this.refs.target_amt.value);

  }

  render() {

  	return (
  		<div>
  			<h2>Resource Allocator</h2>
  			<p>Choose a resource and enter a positive CHF amount and click Add. The resource will be distributed evenly across the months.</p>
  			<label>Enter Target CHF to spend: </label>
  			<input type="text" ref="target_amt" />
  			<button type="button" name="Set" onClick={this.handleAmtToSpend.bind(this)}>Set</button>

  			<br />
  			<br />
  			<label>Select Resource</label>
  			<input type="text" ref="peep" list="resources"/>
  			<datalist ref="resources" id="resources">
  			{Object.keys(this.state.peeps).map((name) =>{
  				return(
  					<option value={name} />
  					)
  			}
  			)}
  			</datalist>
  			<br />
  			<br />
  			<label>Enter CHF: </label>
  			<input type="text" ref="amt"/>

  			<br />
  			<br />
  			<button type="button" id="AddResource" name="Add" onClick={this.handleAddResource.bind(this)}>Add Resource</button>
  			<button type="button" id="ClearTable" name="Add" onClick={this.handleClearTable.bind(this)}>Clear Table</button>
  			<hr/>

  		</div>

  	);

  }

}

export default ResourcePicker;