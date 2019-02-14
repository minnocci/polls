import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Question from './Question'

class Questions extends Component {
  
  render() {

    const { questions } = this.props
    const bar = (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Questions
          </Typography>
        </Toolbar>
      </AppBar>
    )

    return (
      <div>
        {bar}
        <main>
          <Grid container spacing={24}>
            {Object.keys(questions).map((key) => {
              return (
                <Grid
                  key={`question-${key}`}
                  item xs={12} sm={6} md={4} lg={3}>
                  <div>
                    <Question question={questions[key]} />
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </main>
      </div>
    )

  }
  
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Questions)