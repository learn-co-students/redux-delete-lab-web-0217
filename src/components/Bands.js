import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  constructor() {
    super()
    this.listBands = this.listBands.bind(this)
  }

  listBands() {
    return this.props.store.getState().bands.map((band, i) => {
      return <Band band={band} store={this.props.store} key={band.id}/>
    })
  }
  render() {
    return(
      <ul>
        {this.listBands()}
      </ul>
    );
  }
};

export default Bands;
