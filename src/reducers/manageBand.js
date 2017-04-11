export default function manageBand(state = {
  bands: [],
  currentId: 1
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newId = state.currentId
      let bandObject = {id: newId, text: action.band.text}
      return { bands: state.bands.concat(bandObject), currentId: state.currentId+1}
    case 'DELETE_BAND':
      let filteredList = state.bands.filter((band) => {
        return band.id !== action.id
      })
      return {bands: filteredList}
    default:
      return state;
  }
};
