import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import CreateCardsForm from './CreateCardsForm'
import messages from '../AutoDismissAlert/messages'

class CardsCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: [{
        cards: [{
          card: {
            question: '',
            answer: '',
            created_at: null,
            updated_at: null,
            deck_id: '',
            createdId: null,
            edited: false
          }
        }]
      }]
    }
  }

  componentDidMount () {
    console.log(this.props.match.params.id)
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/decks/${this.props.match.params.id}/`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
    // data: { deck: this.state.deck }
      // .then(res => console.log('THIS IS THE', res.data.deck))
      // .then(res => this.state.data.concat([ data ]))
      .then(res => this.setState({ deck: res.data.deck }))
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
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedCard = Object.assign({}, prevState.card, updatedField)
      return { card: editedCard }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const { msgAlert } = this.props
    // const { card } = this.state
    // CREATE A NEW DECK
    axios({
      url: `${apiUrl}/cards/`,
      method: 'POST',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { cards: this.state.cards }
    })
      .then(res => console.log(res))
      .then(res => this.setState({ createdID: res.data.cards.card._id }))
      .then(() => this.setState({ edited: true }))
      .then(console.log('JUST ADDED A NEW CARD LINE 52 CARDSCREATE.JS'))
    //   .then(() => msgAlert({
    //     heading: `Added ${card.question} to decks successfully!`,
    //     message: messages.addToCardsSuccess,
    //     variant: 'success'
    //   }))
      .catch(console.error)
  }

  render () {
    const { card, createdId, edited } = this.state
    // pass in edited above if you will use this component to edit too
    const { handleChange, handleSubmit } = this

    if (createdId !== null) {
      return <Redirect to={`/cards/${createdId}`} />
    } else if (edited) {
      return <Redirect to={{ pathname: '/cards/' }} />
    }

    return (
      <div className='create-page'>
        <CreateCardsForm
          card={card}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/cards/'
        />
      </div>
    )
  }
}

export default withRouter(CardsCreate)
