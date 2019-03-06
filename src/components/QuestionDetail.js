import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleVote } from '../actions/shared'
import { withRouter } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class QuestionDetail extends Component {

  loadQuestion = () => {
    const { questions } = this.props
    const questionId = this.props.match.params.questionId
    const question = Object.values(questions).filter((values) => 
      values.url === `/questions/${questionId}`
    ).shift()
    return question
  }

  hasVoted = (question) => {
    const { userChoices } = this.props
    return Object.keys(userChoices).filter((key) => {
      return userChoices[key].questionUrl === question.url
    }).length > 0
  }

  handleClick = (ev, choice, question) => {
    ev.preventDefault()
    const { dispatch } = this.props
    dispatch(handleVote({
      questionUrl: question.url,
      choiceUrl: choice.url
    }))
  }

  calculateTotalVotes = (choices) => {
    let totalVotes = 0
    choices.map((choice) => {
      return totalVotes += choice.votes
    })
    return totalVotes
  }

  render() {
    const question = this.loadQuestion()
    if (!question) return null
    const hasVoted = this.hasVoted(question)
    const totalVotes = this.calculateTotalVotes(question.choices)
    const bar = (
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Question Detail
          </Typography>
        </Toolbar>
      </AppBar>
    )
    
    return (
      <div>
        {bar}
        <main>
          <Card className='question'>
            <CardHeader
              className='question-header'
              title={`Question: ${question.question}`}
            />
            <CardContent>
              <form className='choices'>
                {question.choices.map((choice,i) => {
                  return (
                    <div
                      key={`choice-${i}`}
                      className='option'
                    >
                      <Grid container spacing={8}>
                        <Grid item xs={12} sm={5}
                          className='option-content option-content-ellipsis'>
                          {choice.choice}
                        </Grid>
                        <Grid item xs={6} sm={4}
                          className='option-content'>
                          {choice.votes} votes
                          ({(choice.votes * 100 / totalVotes).toFixed(2)}%)
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            disabled={hasVoted}
                            onClick={(ev) => this.handleClick(ev, choice, question)}>
                            Vote
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )
                })}
              </form>
              <div className='question-info'>
                {
                hasVoted
                  ? <Typography className='center' variant='caption' gutterBottom>
                      You have already voted in this poll!
                    </Typography>
                  : <Typography className='center' variant='caption' gutterBottom>
                      You have not voted in this poll yet!
                    </Typography>
                }
              </div>
              <Button
                variant='contained'
                color='default'
                onClick={() => window.history.back()}>
                Back
            </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

}

function mapStateToProps ({ questions, userChoices }) {
  return {
    questions,
    userChoices
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))