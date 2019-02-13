import {
  RECEIVE_QUESTIONS,
  VOTE_CHOICE
} from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case VOTE_CHOICE:
      // TODO implement later
      return state
    default:
      return state
  }
}