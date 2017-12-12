import * as reducer from './reducer'
import {deepObject, deepObjectNewUNO, deepObjectNewDOS} from './testObjects'
  

  describe('Non normalized reducer', () => {
    it('should return the initial state when an unexpected action is given', () => {
      expect(reducer.default(undefined, {})).toEqual(reducer.initialState)
    })
  
    it('should load the received nested object into state', () => {
      expect(
        reducer.default(reducer.initialState, {
          type: reducer.LOAD_NESTED_DATA,
          payload: deepObject
        })
      ).toEqual(deepObject)
    })

    it('should change the value of the eleven key under the UNO property', () => {
        const action = reducer.deepFieldUnoExampleActionCreator(23)
      expect(
        reducer.default(deepObject, action)
      ).toEqual(deepObjectNewUNO)
    })

    it('should change the value of the eleven key under the DOS property', () => {
        const action = reducer.deepFieldDosExampleActionCreator(23)
      expect(
        reducer.default(deepObject, action)
      ).toEqual(deepObjectNewDOS)
    })
  })