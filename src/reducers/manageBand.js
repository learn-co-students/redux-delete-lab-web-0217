export default function manageBand(state = {
  bands: [],
  currentId: 1
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = { id: state.currentId, text: action.band.text }
      return { bands: state.bands.concat(newBand), currentId: state.currentId + 1 }

    case 'DELETE_BAND':
      let filteredList = state.bands.filter((band) => {
        return band.id !== action.id
      })
      return { bands: filteredList, currentId: state.currentId }
    default:
      return state;
  }
};
