import updateDeepField from './updateDeepField'

const initialState = {
    one:{
        oneData:[],
        two:{}
    }
}

//Action Type
const GOT_NESTED_DATA = "GOT NESTED DATA"
const NEW_UNO = "NEW UNO"
const NEW_DOS = "NEW DOS"

// Action ids
const UNO = "UNO"
const DOS = "DOS"

//Action Creator
const nestedDataLoader = (nestedData) => {
	return {
		type: GOT_NESTED_DATA,
		payload: nestedData
	}
}

// Our single updateDeepField function is able to take care of changing any specific ID in the 
// "ten depth", but we should have a seperate action creator for each specific ID in the depth

const deepFieldUnoExampleActionCreator = (data) => {
    return {
        type: NEW_UNO,
        id: UNO,
        payload: data
    }
}

const deepFieldDosExampleActionCreator = (data) => {
    return {
        type: NEW_UNO,
        id: UNO,
        payload: data
    }
}

//Reducer
const campusesObj = function(state = initialState, action) {
  switch(action.type) {
  	case GOT_NESTED_DATA:
  		const newState = Object.assign({}, state, action.payload)
          return newState
    case NEW_UNO:
        return updateDeepField(state, action)
    case NEW_DOS:
        return updateDeepField(state, action)
    default: return state
  }
}


