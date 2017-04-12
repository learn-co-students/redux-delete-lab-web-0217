import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {
    let bands = this.props.store.getState().bands.map((band) => {
      return <Band band={band} store={this.props.store}/>
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
