let idCount = 0
export default function manageBand(state = {bands: []}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    	idCount++
    	let newBand = {text: action.band.text, id: idCount}
      return { bands: [...state.bands, newBand]}
    case 'DELETE_BAND':
     	let newArray = state.bands.filter(band => band.id !== action.id)
     	return {bands: newArray}
    default:
      return state
  }
}
