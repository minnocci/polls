import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CircularProgress from '@material-ui/core/CircularProgress'

import Questions from './Questions'
import QuestionDetail from './QuestionDetail'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {

    const bar = (
      <AppBar position="static" color="secondary">
        <Toolbar/>
      </AppBar>
    )

    return (
      this.props.loading === true
        ? <div>
            {bar}
            <CircularProgress className='loader' color="secondary" />
          </div>
        : <QuestionDetail questionId={10}/>
    )

  }
  
}

function mapStateToProps ({ questions }) {
  return {
    loading: questions === null
  }
}

export default connect(mapStateToProps)(App)