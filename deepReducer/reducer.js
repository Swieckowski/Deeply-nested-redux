import updateDeepField from './updateDeepField'

export const initialState = {
    one: {
        oneData:[],
        two: {
            twoData:[],
            three: {
                threeData:[],
                four: {
                    fourData:[],
                    five: {
                        fiveData:[],
                        six: {
                            sixData:[],
                            seven: {
                                sevenData:[],
                                eight: {
                                    eightData:[],
                                    nine: {
                                        nineData:[],
                                        ten: {
                                            uno: {
                                                eleven: 0
                                            },
                                            dos: {
                                                eleven: 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Action Type
export const LOAD_NESTED_DATA = "LOAD NESTED DATA"
export const NEW_UNO = "NEW UNO"
export const NEW_DOS = "NEW DOS"

// Action ids
const uno = "uno"
const dos = "dos"

//Action Creator
export const nestedDataLoader = (nestedData) => {
	return {
		type: LOAD_NESTED_DATA,
		payload: nestedData
	}
}

// Our single updateDeepField function is able to take care of changing any specific ID in the 
// "ten depth", but we should have a seperate action creator for each specific ID in the depth

export const deepFieldUnoExampleActionCreator = (data) => {
    return {
        type: NEW_UNO,
        id: uno,
        payload: data
    }
}

export const deepFieldDosExampleActionCreator = (data) => {
    return {
        type: NEW_UNO,
        id: dos,
        payload: data
    }
}

//Reducer
export default function(state = initialState, action) {
  switch(action.type) {
      case LOAD_NESTED_DATA:
  		const newState = Object.assign({}, state, action.payload)
          return newState
    case NEW_UNO:
        return updateDeepField(state, action)
    case NEW_DOS:
        return updateDeepField(state, action)
    default: 
        return state
  }
}


