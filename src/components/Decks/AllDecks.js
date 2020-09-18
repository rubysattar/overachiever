// THIS IS THE VIEW FOR ALL THE DECKS.
// IT SHOULD INCLUDE A BUTTON TO 'SHOW' A SINGLE DECK
// *by clicking into the link of a deck*
// (A CONST WHERE YOU PASS IN THE API CALL THAT HAS JSX OF THAT CARD)

// IT SHOULD INCLUDE A BUTTON TO 'CREATE' A NEW DECK
// *outside all decks*
// (REFACTORED COMPONENT THAT HAS JSX FORM TO CREATE THE DECK)
// CREATE BUTTON SHOULD TRIGGER A MODAL

import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

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
    const { msgAlert } = this.props
    //   make a request for all of the decks
    axios({
      url: (`${apiUrl}/decks/`),
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then((res) => {
        this.setState({ decks: res.data.decks })
        if (res.data.decks.length === 0) {
          msgAlert({
            heading: 'You have no decks to show!',
            message: messages.noDecks,
            variant: 'danger'
          })
        } else if (res) {
          msgAlert({
            heading: 'Here are all your decks!',
            message: messages.indexDecks,
            variant: 'success'
          })
        }
      })
      .catch(console.error)
  }

  render () {
    const decks = this.state.decks.map(deck => (
      <Card key={deck.id} className='col-sm-4'>
        <Card.Title>
          <Link to={`/decks/${deck.id}`}>{deck.topic}</Link>
        </Card.Title>
      </Card>
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
