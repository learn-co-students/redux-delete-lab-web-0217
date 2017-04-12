import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  render() {
  	let allBands = this.props.store.getState().bands.map((el, idx) => {
  		return <Band key={idx} band={el} id={el.id} store={this.props.store} />
  	})

    return(
      <ul>
        {allBands}
      </ul>
    )
  }
}

export default Bands
