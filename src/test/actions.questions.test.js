import {receiveQuestions, voteChoice} from '../actions/questions'
import {
  RECEIVE_QUESTIONS,
  VOTE_CHOICE
} from '../actions/questions'
import {mockedQuestions as questions, mockedUserChoices as userChoices} from '../utils/_DATA'

describe('questions actions', () => {

  it('should create an action to receive the questions collection', () => {
    const expectedAction = {
      type: RECEIVE_QUESTIONS,
      questions
    }
    expect(receiveQuestions(questions)).toEqual(expectedAction)
  })

  it('should create an action to vote a choice', () => {
    const expectedAction = {
      type: VOTE_CHOICE,
      ...userChoices[0]
    }
    expect(voteChoice(userChoices[0])).toEqual(expectedAction)
  })

})