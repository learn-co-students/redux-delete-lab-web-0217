import React, { Component } from 'react';

class Band extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    e.preventDefault()
    this.props.store.dispatch({type: "DELETE_BAND", id: this.props.band.id})
  }

  render() {
    return(
      <div>
        <li>
         {this.props.band.id}. {this.props.band.text}
         <button onClick={this.handleDelete}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
