import {getUserChoices, addUserChoice} from '../actions/user'
import {
  GET_USER_CHOICES,
  ADD_USER_CHOICE
} from '../actions/user'
import {mockedUserChoices as userChoices} from '../utils/_DATA'

describe('user actions', () => {

  it('should create an action to receive the user choices', () => {
    const expectedAction = {
      type: GET_USER_CHOICES,
      userChoices
    }
    expect(getUserChoices(userChoices)).toEqual(expectedAction)
  })

  it('should create an action to add the user choice', () => {
    const expectedAction = {
      type: ADD_USER_CHOICE,
      ...userChoices[0]
    }
    expect(addUserChoice(userChoices[0])).toEqual(expectedAction)
  })

})