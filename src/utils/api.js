import {
  _getQuestions,
  _getUserChoices
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUserChoices(),
  ]).then(([questions, userChoices]) => ({
    questions,
    userChoices
  }))
}

export function submitVote({ questionId, choiceId }) {
  return new Promise((resolve) => { 
    resolve({ questionId, choiceId })
  })
}