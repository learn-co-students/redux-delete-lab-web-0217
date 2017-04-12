import React, { Component } from 'react';

class Band extends Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(event) {
    event.preventDefault()
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }
  render() {
    return(
      <div>
        <li>{this.props.band.id}: {this.props.band.text}</li>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
};

export default Band;
