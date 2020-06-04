import React, { Component } from 'react';
import roundTo from '../utils/roundTo';

class Summary extends Component {
  render() {
    return (
      <div className="container">
        <h4>
          {this.props.category} Average Cubic Weight : {roundTo(this.props.avgCubicWeight/1000, 2)} kg
        </h4>
      </div>
    );
  }
}

export default Summary;