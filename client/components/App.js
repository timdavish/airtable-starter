import React, { Component, Fragment } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      records: []
    }
  }

  async componentDidMount () {
    const response = await fetch('http://localhost:3000/api', { method: 'GET' })
    const json = await response.json()

    this.setState({ records: json.records })
  }

  render () {
    const { records } = this.state

    return (
      <Fragment>
        { records && records.length > 0
          ? records.map((record, index) => (
            <p key={index}>{ JSON.stringify(record) }</p>
          ))
          : <p>No records found.</p>
        }
      </Fragment>
    )
  }
}

export default App
