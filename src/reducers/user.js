import {
  GET_USER_CHOICES,
  ADD_USER_CHOICE
} from '../actions/user'

export default function userChoices (state = {}, action) {
  switch (action.type) {
    case GET_USER_CHOICES:
      return {
        ...state,
        ...action.userChoices
      }
    case ADD_USER_CHOICE:
      const choice = { questionUrl: action.questionUrl, choiceUrl: action.choiceUrl}
      const key = Object.keys(state).length
      return {
        ...state,
        [key]: choice
      }
    default:
      return state
  }
}