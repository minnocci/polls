export const GET_USER_CHOICES = 'GET_USER_CHOICES'
export const ADD_USER_CHOICE = 'ADD_USER_CHOICE'

export function getUserChoices (userChoices) {
  return {
    type: GET_USER_CHOICES,
    userChoices
  }
}

export function addUserChoice ({ questionUrl, choiceUrl }) {
  return {
    type: ADD_USER_CHOICE,
    questionUrl,
    choiceUrl
  }
}