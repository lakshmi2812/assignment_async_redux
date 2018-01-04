import * as Actions from './actions'

const initialState = {
  goodreads: [],
  isFetching: false,
  error: null,
}

export function goodreads(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GOODREADS_SUCCESS:
      return {
        ...state,
        goodreads: action.data,
        isFetching: false,
      }
    case Actions.GET_GOODREADS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case Actions.GET_GOODREADS_FAILURE:
      console.log('Error:', action.error)
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}
