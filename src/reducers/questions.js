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
      const questionKey = Object.keys(state).filter((key) => {
        return state[key].url === action.questionUrl
      })
      const question = state[questionKey]
      const choiceKey = Object.keys(question.choices).filter((key) => {
        return question.choices[key].url === action.choiceUrl
      })
      const choice = question.choices[choiceKey]     
      choice.votes = choice.votes + 1
      return {
        ...state,
        [questionKey]: question
      }
    default:
      return state
  }
}