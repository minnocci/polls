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

export function submitVote({ questionUrl, choiceUrl }) {
  return new Promise((resolve) => { 
    resolve({ questionUrl, choiceUrl })
  })
}