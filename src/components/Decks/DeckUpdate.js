import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import Form from 'react-bootstrap/Form'

// import updateDeleteDeckForm from './updateDeleteDeckForm'
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

      const editedDeck = Object.assign({}, prevState.item, updatedField)
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
          topic: this.state.deck.topic
        }
      },
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ edited: true }))
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
    const cancelPath = (`/books/${this.props.match.params.id}`)

    if (edited) {
    //   return <Redirect to={`/decks/${createdId}`} />
    // } else if (edited) {
      return <Redirect to={{ pathname: `/decks/${this.props.match.params.id}` }} />
    }
    // const UpdateDeleteDeckForm = ( deck, updateDeck, handleChange, destroyDeck, cancelPath ) => (
    //   <div className="edits">

    //   </div>
    // )

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextArea1">
            <h4>{deck.topic}</h4><br/>
            <Form.Label>Edit this deck</Form.Label>
            <Form.Control as="textarea" rows="3" value={deck.topic} name='topic' onChange={handleChange}/>
          </Form.Group>
          <button type='submit'>Submit Changes</button>
          <Link to={cancelPath}>
            <button>Cancel</button>
          </Link><br/>
          <Link to='/decks/'>Back to all decks</Link>
        </Form>
      </div>
    )
  }
}

export default DeckUpdate
