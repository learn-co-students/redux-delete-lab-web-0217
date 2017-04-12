import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {
  render() {

    return(

      <ul>
        {this.props.store.getState().bands.map((band, index)=>{
          return <Band store={this.props.store} band={band}
              />
        })}
      </ul>
    );
  }
};

export default Bands;
