import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import List from './List';
import Summary from './Summary';

class App extends Component {
  componentDidMount() {
    this.props.fetchItemsByCategory('Air Conditioners');
  }

  render() {
    return (
      <div>
        {this.props.errorMessage}
        <List list={this.props.list} />
        <Summary avgCubicWeight={this.props.avgCubicWeight} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.item.items,
    avgCubicWeight: state.item.avgCubicWeight,
    errorMessage: state.item.errorMessage
  }
}

export default connect(mapStateToProps, actions)(App);