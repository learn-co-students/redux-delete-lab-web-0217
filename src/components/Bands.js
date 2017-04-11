import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  listBands() {
    return this.props.store.getState().bands.map((band) => {
      return <Band band={band} store={this.props.store} />
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
