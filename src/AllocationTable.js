import React, { Component } from 'react';
import AllocationRow from './AllocationRow.js';

class AllocationTable extends Component {

roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}
 

  render() {

  var amt_spent = 0;
  var days_spent = 0;

  const roundUp = window.roundUp;
  const commaSeparateNumber = window.commaSeparateNumber;

  /* TO DO: figure out a way to use the reduce operation to do this nicely! */

  this.props.entries.forEach((x) => { amt_spent += Number(x.amt)});
  this.props.entries.forEach((x) => { days_spent += Number(x.amt)/Number(x.rate)} );


  var amt_remaining = this.props.amt_to_spend - amt_spent;

  amt_remaining = commaSeparateNumber(amt_remaining);
  amt_spent = roundUp(amt_spent, 2);
  amt_spent = commaSeparateNumber(amt_spent);

  days_spent = roundUp(days_spent, 2);

  this.props.entries.forEach((x) => { })

  	return(
  			<div>
  				<label style={{fontWeight:"bold",color:"rgb(68,78,143)"}}>Amount Remaining to Spend: {amt_remaining}</label>
	  			<br/>
	  			<br/>
	  			<table>
					<tr className="hdrRow">
						<th style={{textAlign:"left",paddingLeft:0,paddingRight:30}}>RESOURCE</th>
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
						<th style={{borderRight:"1px solid"}}>Dec</th>
						<th style={{borderRight:"1px solid"}}>Total PD</th>
						<th>Total CHF</th>
					</tr>
					<tbody>
						{this.props.entries.map((row) => {
							return (<AllocationRow entry={row}/>)
						})}
						<tr className="totalRow">
							<td style={{fontWeight:"bold", textAlign:"left"}}>TOTAL</td>
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
							<td style={{borderRight:"1px solid"}}>{this.props.totals[11]}</td>
							<td style={{borderRight:"1px solid"}}>{days_spent}</td>
							<td style={{borderRight:"1px solid"}}>{amt_spent}</td>
						</tr>
					</tbody>
				</table>
			</div>
  		);

  }

}

export default AllocationTable;