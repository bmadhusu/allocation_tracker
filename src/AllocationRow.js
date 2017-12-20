import React, { Component } from 'react';


class AllocationRow extends Component {

  constructor() {
    super();
  }

roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

  render() {
  	console.log(this.props.entry);
  	var days_per_month = this.roundUp(this.props.entry.amt / this.props.entry.rate / 12, 2);

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
  		<td>{this.props.entry.amt}</td>
  		</tr>
  		);

  }

}

export default AllocationRow;

