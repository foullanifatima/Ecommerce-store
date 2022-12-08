import { userActionType } from './user.types'

// adding initial state
const INITIAL_STATE = {
  currentUser: null,
}

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}
