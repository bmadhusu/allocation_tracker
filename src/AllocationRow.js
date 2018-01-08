import React, { Component } from 'react';


class AllocationRow extends Component {

  render() {
  	console.log(this.props.entry);

  	const roundUp = window.roundUp;
	const commaSeparateNumber = window.commaSeparateNumber;
	let allocs = this.props.entry.monthly_allocations;
	var entry_days = roundUp(this.props.entry.amt / this.props.entry.rate, 2);
	var entry_amt = commaSeparateNumber(this.props.entry.amt);

  	return(
  		<tr>

  		<td style={{textAlign:"left"}}>
  			{this.props.entry.name}
  		</td>
  		<td>{allocs[0]}</td>
  		<td>{allocs[1]}</td>
  		<td>{allocs[2]}</td>
  		<td>{allocs[3]}</td>
  		<td>{allocs[4]}</td>
  		<td>{allocs[5]}</td>
  		<td>{allocs[6]}</td>
  		<td>{allocs[7]}</td>
  		<td>{allocs[8]}</td>
  		<td>{allocs[9]}</td>
  		<td>{allocs[10]}</td>
  		<td style={{borderRight:"1px solid"}}>{allocs[11]}</td>
  		<td style={{borderRight:"1px solid"}}>{entry_days}</td>
  		<td style={{borderRight:"1px solid"}}>{entry_amt}</td>
  		</tr>
  		);

  }

}

export default AllocationRow;

