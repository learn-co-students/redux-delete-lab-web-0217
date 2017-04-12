import Band from './Band';
import React, { Component } from 'react';

class Bands extends Component {
  render() {
    const bandList = this.props.store.getState().bands.map((band, index) => {
      return <Band key={index} band={band} />
    })

    return(
      <ul>
        {bandList}
      </ul>
    );
  }
};

export default Bands;
