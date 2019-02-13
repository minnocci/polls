import { getInitialData, submitVote } from '../utils/api'
import { receiveQuestions, voteChoice } from './questions'
import { getUserChoices, addUserChoice } from './user'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
    .then(({ questions, userChoices }) => {
      dispatch(receiveQuestions(questions))
      dispatch(getUserChoices(userChoices))
    })
  }
}

export function handleVote ({ questionUrl, choiceUrl }) {
  return (dispatch) => {
    return submitVote({ questionUrl, choiceUrl })
      .then(({ questionUrl, choiceUrl }) => {
        dispatch(voteChoice({ questionUrl, choiceUrl }))
        dispatch(addUserChoice({ questionUrl, choiceUrl }))
      })
      .catch ((error) => {
        console.warn('Error in handleVote: ', error)
      })
  }
}