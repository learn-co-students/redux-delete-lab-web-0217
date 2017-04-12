import React, { Component } from 'react';

class Band extends Component {
  handleClick(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    });
  }

  render() {
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={(event)=>this.handleClick(event)}>Delete</button>
        </li>
      </div>
    )
  }
};

export default Band;
