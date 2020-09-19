import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// import Form from 'react-bootstrap/Form'
import UpdateDecksForm from './UpdateDecksForm'

import messages from '../AutoDismissAlert/messages'

class DeckUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: {
        topic: ''
      },
      edited: false
    }
  }
  componentDidMount () {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/decks/${this.props.match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { deck: this.state.deck }
    })
      .then(res => this.setState({ deck: { topic: res.data.deck.topic } }))
      .then(() => msgAlert({
        heading: 'Success!',
        message: messages.showDeckSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Show Deck Failed' + error.message,
          message: messages.showDeckFailure,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedDeck = Object.assign({}, prevState.deck, updatedField)
      return { deck: editedDeck }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert } = this.props
    // const { edited } = this.state
    axios({
      url: `${apiUrl}/decks/${this.props.match.params.id}/`,
      method: 'PATCH',
      data: {
        deck: {
          topic: this.state.topic
        }
      },
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then(() => this.setState({ edited: true }))
      .then(res => this.setState({ deck: res.data.deck }))
      .then(() => msgAlert({
        heading: 'Edited your deck successfully!',
        message: messages.editedDeckSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  render () {
    const { deck, edited } = this.state
    // pass in edited above if you will use this component to edit too
    const { handleChange, handleSubmit } = this
    // const cancelPath = (`/books/${this.props.match.params.id}/`)

    if (edited) {
    //   return <Redirect to={`/decks/${createdId}`} />
    // } else if (edited) {
      return <Redirect to={{ pathname: `/decks/${this.props.match.params.id}/` }} />
    }
    // const UpdateDeleteDeckForm = ( deck, updateDeck, handleChange, destroyDeck, cancelPath ) => (
    //   <div className="edits">

    //   </div>
    // )

    return (
      <div>
        <h4>{deck.topic}</h4>
        <UpdateDecksForm
          deck={deck}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={(`/books/${this.props.match.params.id}/`)}
        />
      </div>
    )
  }
}

export default withRouter(DeckUpdate)
