import React, { Component } from 'react';
import AllocationRow from './AllocationRow.js';

class AllocationTable extends Component {

roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}
 

  render() {

  var amt_spent = 0;

  const roundUp = window.roundUp;
  const commaSeparateNumber = window.commaSeparateNumber;

  /* TO DO: figure out a way to use the reduce operation to do this nicely! */

  this.props.entries.forEach((x) => { amt_spent += Number(x.amt)});
  var amt_remaining = this.props.amt_to_spend - amt_spent;

  amt_remaining = commaSeparateNumber(amt_remaining);
  amt_spent = roundUp(amt_spent, 2);
  amt_spent = commaSeparateNumber(amt_spent);


  this.props.entries.forEach((x) => { })

  	return(
  			<div>
  				<label>Amt Remaining to Spend: {amt_remaining}</label>
	  			<table>
					<thead>
						<tr>
							<th>Resource</th>
							<th>Jan</th>
							<th>Feb</th>
							<th>Mar</th>
							<th>Apr</th>
							<th>May</th>
							<th>Jun</th>
							<th>Jul</th>
							<th>Aug</th>
							<th>Sep</th>
							<th>Oct</th>
							<th>Nov</th>
							<th>Dec</th>
							<th>Total CHF</th>
						</tr>
					</thead>
					<tbody>
						{this.props.entries.map((row) => {
							return (<AllocationRow entry={row}/>)

						})}
						<tr>
							<td>TOTAL</td>
							<td>{this.props.totals[0]}</td>
							<td>{this.props.totals[1]}</td>
							<td>{this.props.totals[2]}</td>
							<td>{this.props.totals[3]}</td>
							<td>{this.props.totals[4]}</td>
							<td>{this.props.totals[5]}</td>
							<td>{this.props.totals[6]}</td>
							<td>{this.props.totals[7]}</td>
							<td>{this.props.totals[8]}</td>
							<td>{this.props.totals[9]}</td>
							<td>{this.props.totals[10]}</td>
							<td>{this.props.totals[11]}</td>
							<td>{amt_spent}</td>
						</tr>
					</tbody>
				</table>
			</div>
  		);

  }

}

export default AllocationTable;