import React, { Component } from 'react';
import roundTo from '../utils/roundTo';

class List extends Component {
  renderList() {
    return this.props.list.map(item => {
      return (
        <tr key={item.title}>
          <td>{item.category}</td>
          <td>{item.title}</td>
          <td>{item.size.width.toFixed(1)}</td>
          <td>{item.size.length.toFixed(1)}</td>
          <td>{item.size.height.toFixed(1)}</td>
          <td>{roundTo(item.weight/1000, 2)}</td>
          <td>{roundTo(item.cubicWeight/1000, 2)}</td>
        </tr>
      );
    });
  }

  render() {
    if (Object.entries(this.props.list).length === 0) {
      return ( <div></div> );
    }
    
    return (
      <div className="container">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Width(cm)</th>
              <th>Length(cm)</th>
              <th>Height(cm)</th>
              <th>Weight(kg)</th>
              <th>Cubic Weight(kg)</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;