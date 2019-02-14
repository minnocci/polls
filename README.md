# Polls
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The provided documentation can be found at the end of this document.

## Outline
Single page application that lets users vote through the Polls
API. Documentation for the API is available at http://docs.pollsapi.apiary.io/.

## Getting started
To run this project, you must first install the dependencies with `npm install`. Then, you can run it locally with `npm start`.

## Features
- List of questions page
- Question detail page
- Optional stretch goal: Create new question page (not included yet :/)

## Additional features
- User choices are stored during the session, in order not to make multiple votes for the same question. Interpretation feature :)


# Planning

## Break down views and components
- Questions page component requirements:
  - Is located at /
  - Shows questions collection, with every question as a card (question component)
  - Each question will show: question, formatted timestamp, number of choices

- Question detail page component requirements:
  - Is located at /questions/:id
  - Shows an individual question with its choices
  - For each choice it will be shown: choice, votes, percentage
  - Behaves as a form, the user is able to submit a choice
  - Nice to have: checks if the user voted already and does not allow to vote again

## Determine events in the app
- Questions page component:
  - get the questions (action type: RECEIVE_QUESTIONS)
- Question component:
  - no events other than navigation on click
- Question detail page component:
  - get a particular question from the list of questions
  - get the user stored data to decide if the user is allowed vote (action type: GET_USER_CHOICES)
  - set the vote for question and user if votes (two action types: VOTE_CHOICE, ADD_USER_CHOICE)

## Store and data
- questions: responsible to handle the questions state
- userChoices: responsible to handle the user choices (only kept in the session)
```
{
  questions: {[
    { question, published_at, url, choices },
    { question, published_at, url, choices },
    ...
  ]},
  userChoices: {[
  	{ questionUrl, choiceUrl },
  	{ questionUrl, choiceUrl },
  	...
  ]}
}
```


# Create React App - provided README

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
