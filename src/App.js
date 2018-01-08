import React, { Component } from 'react';
import './App.css';
import ResourcePicker from './ResourcePicker.js';
import AllocationTable from './AllocationTable.js';
import axios from 'axios'

const url_to_fetch_data = "/public/platform_services/platform_services_rates.js";

const roundUp = window.roundUp;

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
      
  s["rate"] = this.state.peeps[s["name"]];

  var totals = this.state.totals;

  // Calculate column totals

  s["monthly_allocations"] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for (var j=s["start_month"]; j<s["end_month"]+1;j++) {
      totals[j] += s["amt"] / s["rate"] / (s["end_month"] - s["start_month"]+1);
      s["monthly_allocations"][j] = roundUp(s["amt"] / s["rate"] / (s["end_month"] - s["start_month"]+1),2);
  }

  entries.push( s );

  this.setState( {entries: entries, totals: totals} );
}

clearTable() {

  this.setState( { entries: [], totals: [0,0,0,0,0,0,0,0,0,0,0,0,0] });
}

handleAmtToSpend(s) {

  this.setState( { amt_to_spend: s });
}


componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get(url_to_fetch_data)
        .then(function(result) {
          // console.log("afer promise: " + JSON.parse(result));
          _this.setState({
            peeps: result.data
          });
        })
        .catch(error => {
          console.log('Error with axios: ', error);
        })

}

render() {

  if (this.state.peeps) {
    var rounded_totals = this.state.totals;

    for (var j = 0; j < rounded_totals.length; j++)
      rounded_totals[j] = roundUp(rounded_totals[j],2);

    return (
      <div className="App">
        <div>
          <div className="vertical-text Top_Div">
            RESOURCE ALLOCATOR
          </div>
          <ResourcePicker peeps={this.state.peeps} addEntry={this.addEntry.bind(this)} handleAmt={this.handleAmtToSpend.bind(this)} clearTable={this.clearTable.bind(this)} />
        </div>
        <hr style={{marginTop: "80px", borderWidth:"1px",backgroundColor:"rgb(142,130,121)"}}/>
        <button className="Btn" type="button" id="ClearTable" name="Add" onClick={this.clearTable.bind(this)}>CLEAR TABLE</button>
        <br/>
        <br/>
       <AllocationTable entries={this.state.entries} amt_to_spend={this.state.amt_to_spend} totals={rounded_totals} />
      </div>
    );
  }

  else {
    return(<div>Getting data</div>);
  }


  }
}

export default App;
