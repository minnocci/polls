// Using Mock data

const mockedQuestions = [
  {
    'url': '/questions/10',
    'published_at': '2015-05-27T21:22:26.670000+00:00',
    'question': 'Game Genre',
    'choices': [
      {
        'url': '/questions/10/choices/70',
        'votes': 837,
        'choice': 'Shooter'
      },
      {
        'url': '/questions/10/choices/69',
        'votes': 256,
        'choice': 'Action'
      },
      {
        'url': '/questions/10/choices/74',
        'votes': 216,
        'choice': 'Strategy'
      },
      {
        'url': '/questions/10/choices/71',
        'votes': 186,
        'choice': 'Action-adventure'
      },
      {
        'url': '/questions/10/choices/75',
        'votes': 176,
        'choice': 'Sports'
      },
      {
        'url': '/questions/10/choices/72',
        'votes': 151,
        'choice': 'Role-playing'
      },
      {
        'url': '/questions/10/choices/73',
        'votes': 151,
        'choice': 'Simulation'
      }
    ]
  },
  {
    'url': '/questions/9',
    'published_at': '2015-05-27T21:22:26.648000+00:00',
    'question': 'Favourite hot beverage?',
    'choices': [
      {
        'url': '/questions/9/choices/65',
        'votes': 367,
        'choice': 'Tea'
      },
      {
        'url': '/questions/9/choices/67',
        'votes': 147,
        'choice': 'Apple Cider'
      },
      {
        'url': '/questions/9/choices/66',
        'votes': 110,
        'choice': 'Coffee'
      },
      {
        'url': '/questions/9/choices/68',
        'votes': 81,
        'choice': 'Hot Chocolate'
      }
    ]
  },
  {
    'url': '/questions/6',
    'published_at': '2015-05-27T21:22:26.576000+00:00',
    'question': 'Favourite colour?',
    'choices': [
      {
        'url': '/questions/6/choices/50',
        'votes': 80,
        'choice': 'Cyan'
      },
      {
        'url': '/questions/6/choices/47',
        'votes': 33,
        'choice': 'Orange'
      },
      {
        'url': '/questions/6/choices/49',
        'votes': 22,
        'choice': 'Green'
      },
      {
        'url': '/questions/6/choices/46',
        'votes': 17,
        'choice': 'Red'
      },
      {
        'url': '/questions/6/choices/52',
        'votes': 17,
        'choice': 'Violet'
      },
      {
        'url': '/questions/6/choices/51',
        'votes': 14,
        'choice': 'Blue'
      },
      {
        'url': '/questions/6/choices/48',
        'votes': 7,
        'choice': 'Yellow'
      }
    ]
  }
]

const mockedUserChoices = [
  {
    'questionUrl': '/questions/10',
    'choiceUrl': '/questions/10/choices/71'
  }
]

function _getMockedQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...mockedQuestions}), 1000)
  })
}

function _getMockedUserChoices () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...mockedUserChoices}), 1000)
  })
}

export async function _getMockedInitialData () {
  return Promise.all([
    _getMockedQuestions(),
    _getMockedUserChoices(),
  ]).then(([questions, userChoices]) => ({
    questions,
    userChoices
  }))
}

export async function _submitVoteMock({ questionUrl, choiceUrl }) {
   return new Promise((resolve) => { 
     resolve({ questionUrl, choiceUrl })
   })
 }


// Using Polls API

const pollsApi = 'https://polls.apiblueprint.org'

const headers = {
   'Content-Type': 'application/json'
 }

const userChoices = []

function _getUserChoices () {
  return new Promise((res, rej) => {
     setTimeout(() => res({...userChoices}), 1000)
  })
}

const _getQuestionsEntryPointAPI = () =>
  fetch(pollsApi, { headers })
    .then(res => res.json())
    .then(response => response.questions_url)
    .catch(error => console.error('Error: ', error))

const _getQuestionsFromAPI = (entryPoint) =>
  fetch(`${pollsApi}${entryPoint}`, { headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

const _postVoteOnAPI = (choiceUrl) =>
  fetch(`${pollsApi}${choiceUrl}`, { method: 'POST', headers })
    .then(res => res.json())
    .catch(error => console.error('Error: ', error))

async function _getQuestions () {
  return Promise.resolve(
    _getQuestionsEntryPointAPI()
  ).then((entryPoint) => (
    Promise.resolve(
      _getQuestionsFromAPI(entryPoint)
    ).then((questions) => (
      questions
    ))
  ))
}

export async function _getInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUserChoices(),
  ]).then(([questions, userChoices]) => ({
    questions,
    userChoices
  }))
}

export async function _submitVote({ questionUrl, choiceUrl }) {
  return Promise.resolve(
    _postVoteOnAPI(choiceUrl)
  ).then(() => (
    { questionUrl, choiceUrl }
  ))
}