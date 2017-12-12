// import deepObject from './testObjects'
import * as reducer from './reducer'
import {deepObject} from './testObjects'
  

  describe('Non normalized reducer', () => {
    it('should return the initial state when an unexpected action is given', () => {
      expect(reducer.default(undefined, {})).toEqual(reducer.initialState)
    })
  
    it('should load the received nested object into state', () => {
        console.log(reducer.LOAD_NESTED_DATA)
      expect(
        reducer.default(reducer.initialState, {
          type: reducer.LOAD_NESTED_DATA,
          payload: deepObject
        })
      ).toEqual(deepObject)
    })
  
  })