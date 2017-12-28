import React, { Component } from 'react';
var helpers2 = require('./helpers2.js')

class ResourcePicker extends Component {

  constructor() {
    super();
    // const peeps = window.peeps;
        // const peeps = peeps; //window.peeps;

    this.state = {
    	peeps: helpers2.peeps2
    };
    
  }

  validateInput(val, amt, start_month, end_month) {

  	
  	if (!((Object.keys(this.state.peeps)).includes(val)) ) {
  		alert("You must select a valid resource");
  		return false;
  	}

  	
  	if (isNaN(amt) || amt <= 0) {
  		alert("You must enter a positive CHF value");
  		return false;
  	}

    if (start_month > end_month) {
      alert("Start Month cannot be after End Month");
      return false;
    }

  //	this.refs.resources.find("option[value='"+val+"']");

  	return true;

  }

  handleAddResource() {

  	let val = this.refs.peep.value;
  	let amt = this.refs.amt.value;
    let start_month = Number(this.refs.start_month.value);
    let end_month = Number(this.refs.end_month.value);

    console.log(`start_month is ${start_month}`);
    console.log(`end_month is ${end_month}`);

  	if (!this.validateInput(val, amt, start_month, end_month))
  		return;

  	var robj = {name: val, amt: amt, start_month, end_month};
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

  month_options(month_pos) {
    return (
          <select ref={month_pos}>
          {month_pos=="start_month" ? <option value={0} selected>Jan</option> : <option value={0}>Jan</option>}
          <option value={1}>Feb</option>
          <option value={2}>Mar</option>
          <option value={3}>Apr</option>
          <option value={4}>May</option>
          <option value={5}>Jun</option>
          <option value={6}>Jul</option>
          <option value={7}>Aug</option>
          <option value={8}>Sep</option>
          <option value={9}>Oct</option>
          <option value={10}>Nov</option>
          {month_pos=="end_month" ? <option value={11} selected>Dec</option> : <option value={11}>Dec</option>}
          </select>

      )
  }

  render() {

console.log("Imported: " + this.state.peeps);
  	return (
  		<div>
  			<h2>Resource Allocator</h2>
  			<p>Choose a resource and enter a positive CHF amount and click Add. The resource will be distributed evenly across the months.</p>
        <p><strong>NOTE: This is calc'ing at a 15% absence rate or 18 days/month</strong></p>
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
        <label>Start Month:</label>
          {this.month_options("start_month")}
        <label>End Month:</label>
          {this.month_options("end_month")}
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