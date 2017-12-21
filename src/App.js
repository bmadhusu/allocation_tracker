import React, { Component } from 'react';
import './App.css';
import ResourcePicker from './ResourcePicker.js';
import AllocationTable from './AllocationTable.js';

var peeps = {'Wendy': 200, 'Madhu': 100, 'Veeru': 80}


class App extends Component {

  constructor() {
    super();
    this.state = {
      entries: [],
      amt_to_spend: 0,
      totals: [0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
  }

//  roundUp(num, precision) {
//   precision = Math.pow(10, precision)
//   return Math.ceil(num * precision) / precision
// }

addEntry(s) {

  var entries = this.state.entries;
      
  s["rate"] = peeps[s["name"]];
  entries.push( s );

  var totals = this.state.totals;

  // Calculate column totals

  for (var j=0; j<12;j++) {
      totals[j] += s["amt"] / s["rate"] / 12;
  }

  this.setState( {entries: entries, totals: totals} );
}

clearTable() {

  this.setState( { entries: [], totals: [0,0,0,0,0,0,0,0,0,0,0,0,0] });
}

handleAmtToSpend(s) {

  this.setState( { amt_to_spend: s });
}

  render() {

    var rounded_totals = this.state.totals;

    const roundUp = window.roundUp;

    for (var j = 0; j < rounded_totals.length; j++)
      rounded_totals[j] = roundUp(rounded_totals[j],2);

    return (
      <div className="App">
        <ResourcePicker addEntry={this.addEntry.bind(this)} handleAmt={this.handleAmtToSpend.bind(this)} clearTable={this.clearTable.bind(this)} />
        <AllocationTable entries={this.state.entries} amt_to_spend={this.state.amt_to_spend} totals={rounded_totals} />
      </div>
    );
  }
}

export default App;
