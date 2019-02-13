import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading === true
          ? <div>Loading...</div>
          : <div>Loaded!</div>
        }
      </div>
    )
  }
  
}

function mapStateToProps ({ questions }) {
  return {
    loading: questions === null
  }
}

export default connect(mapStateToProps)(App)