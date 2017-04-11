import React, { Component } from 'react';

class Band extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    return(
      <li>
        {this.props.band.id} - {this.props.band.text}
        <button onClick={this.handleDelete}>DELETE ME</button>
      </li>
    );
  }
};

export default Band;
