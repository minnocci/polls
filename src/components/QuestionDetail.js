import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class QuestionDetail extends Component {

  handleClick = (ev, choice) => {
    ev.preventDefault()
    // TODO handleClick
    console.log("handle click")
  }

  calculateTotalVotes = (choices) => {
    let totalVotes = 0
    choices.map((choice) => {
      return totalVotes += choice.votes
    })
    return totalVotes
  }

  render() {

    const { question } = this.props
    if (!question) return null
    const totalVotes = this.calculateTotalVotes(question.choices)
    const bar = (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
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
                            variant="contained"
                            color="secondary"
                            onClick={(ev) => this.handleClick(ev, choice)}>
                            Vote
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  )
                })}
              </form>
              <div className='question-info'>
                Show info
              </div>
              <Button variant='contained' color='default'>
                  Back
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

}

function mapStateToProps ({ questions, userChoices }, { questionId }) {
  const question = Object.values(questions).filter((values) => 
    values.url === `/questions/${questionId}`
  )[0]
  return {
    question,
    userChoices
  }
}

export default connect(mapStateToProps)(QuestionDetail)