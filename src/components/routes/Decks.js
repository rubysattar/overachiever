import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'

// Decks index component
// show all decks
class Decks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      decks: []
    }
  }

  componentDidMount () {
    //   make a request for all of the decks
    axios(`${apiUrl}/decks/`)
      .then(res => this.setState({ decks: res.data.decks }))
      .catch(console.error)
  }

  render () {
    const decks = this.state.decks.map(deck => (
      <Fragment key={deck.id}>
        <div className='col-sm-4'>
          <Card>
            <Card.Body>
              <Link to={`/decks/${deck.id}`}>{deck.topic}</Link>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    ))

    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            {decks}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Decks
