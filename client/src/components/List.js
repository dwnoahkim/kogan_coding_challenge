import React, { Component } from 'react';

class List extends Component {
  render() {
    if (Object.entries(this.props.list).length === 0) {
      return ( <div></div> );
    }

    return this.props.list.map(item => {
      return (
        <div key={item.title}>
          {item.title}
        </div>
      );
    });
  }
}

export default List;