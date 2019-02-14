const questions = [
  {
     "url":"/questions/10",
     "published_at":"2015-05-27T21:22:26.670000+00:00",
     "question":"Game Genre",
     "choices":[
        {
           "url":"/questions/10/choices/70",
           "votes":837,
           "choice":"Shooter"
        },
        {
           "url":"/questions/10/choices/69",
           "votes":256,
           "choice":"Action"
        },
        {
           "url":"/questions/10/choices/74",
           "votes":216,
           "choice":"Strategy"
        },
        {
           "url":"/questions/10/choices/71",
           "votes":186,
           "choice":"Action-adventure"
        },
        {
           "url":"/questions/10/choices/75",
           "votes":176,
           "choice":"Sports"
        },
        {
           "url":"/questions/10/choices/72",
           "votes":151,
           "choice":"Role-playing"
        },
        {
           "url":"/questions/10/choices/73",
           "votes":151,
           "choice":"Simulation"
        }
     ]
  },
  {
     "url":"/questions/9",
     "published_at":"2015-05-27T21:22:26.648000+00:00",
     "question":"Favourite hot beverage?",
     "choices":[
        {
           "url":"/questions/9/choices/65",
           "votes":367,
           "choice":"Tea"
        },
        {
           "url":"/questions/9/choices/67",
           "votes":147,
           "choice":"Apple Cider"
        },
        {
           "url":"/questions/9/choices/66",
           "votes":110,
           "choice":"Coffee"
        },
        {
           "url":"/questions/9/choices/68",
           "votes":81,
           "choice":"Hot Chocolate"
        }
     ]
  },
  {
     "url":"/questions/6",
     "published_at":"2015-05-27T21:22:26.576000+00:00",
     "question":"Favourite colour?",
     "choices":[
        {
           "url":"/questions/6/choices/50",
           "votes":80,
           "choice":"Cyan"
        },
        {
           "url":"/questions/6/choices/47",
           "votes":33,
           "choice":"Orange"
        },
        {
           "url":"/questions/6/choices/49",
           "votes":22,
           "choice":"Green"
        },
        {
           "url":"/questions/6/choices/46",
           "votes":17,
           "choice":"Red"
        },
        {
           "url":"/questions/6/choices/52",
           "votes":17,
           "choice":"Violet"
        },
        {
           "url":"/questions/6/choices/51",
           "votes":14,
           "choice":"Blue"
        },
        {
           "url":"/questions/6/choices/48",
           "votes":7,
           "choice":"Yellow"
        }
     ]
  }
]

const userChoices = [
  /*{
    "questionId": "/questions/10",
    "choiceId": "/questions/10/choices/71"
  }*/
]

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _getUserChoices () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...userChoices}), 1000)
  })
}