import React, { Component, Fragment } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      records: []
    }
  }

  componentDidMount () {}

  render () {
    const { records } = this.state

    return (
      <Fragment>
        { records && records.length > 0
          ? records.map((record, index) => {
            <p key={index}>{ record }</p>
          })
          : <p>No records found.</p>
        }
      </Fragment>
    )
  }
}

export default App
