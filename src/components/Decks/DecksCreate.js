import React, { Component } from 'react'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import DecksForm from './DecksForm'
import messages from '../AutoDismissAlert/messages'

class DecksCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: {
        topic: ''
      },
      createdId: null,
      edited: false
    }
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
    const { deck } = this.state
    axios({
      url: `${apiUrl}/decks/`,
      method: 'POST',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { deck: this.state.deck }
    })
    //   .then(res => console.log(res))
      .then(res => this.setState({ createdID: res.data.deck._id }))
      .then(() => msgAlert({
        heading: `Added ${deck.topic} to decks successfully!`,
        message: messages.addToDeckSuccess,
        variant: 'success'
      }))
    //   .then(res => {
    //     const deck = res.data.decks.find((element) => {
    //       return element.topic === this.state.deck.topic
    //     })
    //     if (deck) {
    //       return axios({
    //         url: (`${apiUrl}/decks/${deck._id}`),
    //         method: 'PATCH',
    //         headers: {
    //           'Authorization': `Token ${this.props.user.token}`
    //         },
    //         data: { deck: this.state.deck }
    //       })
    //     } else {
    //       return axios({
    //         url: (`${apiUrl}/decks`),
    //         method: 'POST',
    //         headers: {
    //           'Authorization': `Token ${this.props.user.token}`
    //         },
    //         data: { deck: this.state.deck }
    //       })
    //     }
    //   })
    //   .then((res) => {
    //     if (res.status === 201) {
    //       this.setState({ createdId: res.data.deck._id })
    //     } else if (res.status === 204) {
    //       this.setState({ edited: true })
    //     }
    //   })
      .catch(console.error)
  }

  render () {
    const { deck, createdId } = this.state
    // pass in edited above if you will use this component to edit too
    const { handleChange, handleSubmit } = this

    if (createdId) {
    //   return <Redirect to={`/decks/${createdId}`} />
    // } else if (edited) {
      return <Redirect to={{ pathname: '/decks/' }} />
    }

    return (
      <div>
        <DecksForm
          deck={deck}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath='/'
        />
      </div>
    )
  }
}

export default DecksCreate
