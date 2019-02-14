import {
  //_getMockedInitialData, // change to use mock data
  //_submitVoteMock // change to use mock data
  _getInitialData,
  _submitVote
} from './_DATA.js'

export function getInitialData () {
  return _getInitialData()
}

export function submitVote({ questionUrl, choiceUrl }) {
  return _submitVote({ questionUrl, choiceUrl })
}