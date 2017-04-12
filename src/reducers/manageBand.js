let currId = 0

export default function manageBand(state={bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      currId++
      let band = Object.assign({}, action.band, {id: currId})
      return { bands: state.bands.concat(band)}
    case 'DELETE_BAND':
      console.log(state, action)
      const bands = state.bands.filter(band => band.id !== action.id)
      return { bands }
    default:
      return state;
  }
};
