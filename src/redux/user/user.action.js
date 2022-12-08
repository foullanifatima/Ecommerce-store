import { userActionType } from './user.types'
import { store } from '../store'
export const setCurrentUser = (user) =>
  store.dispatch({
    type: userActionType.SET_CURRENT_USER,
    payload: user,
  })
