import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(evt) {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }


  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={() => this.handleClick()} >
          Delete
        </button>
      </div>
    );
  }
};

export default Band;
