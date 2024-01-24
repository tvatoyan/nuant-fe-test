import { Action } from '../types'

export const initialState = {
  search: '',
  type: '',
}

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        search: action.payload,
      }
    case 'type':
      return {
        ...state,
        type: action.payload,
      }
    default:
      return state
  }
}
