import React, { Component } from 'react';


class AllocationRow extends Component {

  render() {
  	console.log(this.props.entry);

  	const roundUp = window.roundUp;
	const commaSeparateNumber = window.commaSeparateNumber;
	var days_per_month = roundUp(this.props.entry.amt / this.props.entry.rate / 12, 2);
	var entry_amt = commaSeparateNumber(this.props.entry.amt);

  	return(
  		<tr>

  		<td>
  			{this.props.entry.name}
  		</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{days_per_month}</td>
  		<td>{entry_amt}</td>
  		</tr>
  		);

  }

}

export default AllocationRow;

