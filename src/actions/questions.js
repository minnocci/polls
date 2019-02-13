export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const VOTE_CHOICE = 'VOTE_CHOICE'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function voteChoice ({ questionUrl, choiceUrl }) {
  return {
    type: VOTE_CHOICE,
    questionUrl,
    choiceUrl
  }
}