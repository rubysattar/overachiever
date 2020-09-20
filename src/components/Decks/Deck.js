import React, { Component, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
import Card from 'react-bootstrap/Card'
// import UpdateDeleteDeckForm from './updateDeleteDeckForm'
// import { showDeck, deleteDeck, editDeck } from '../../api/DecksApi'

// Import axios so we can make HTTP requests
import axios from 'axios'

class Deck extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)
    this.state = {
      // Initially, our deck state will be null, until the API request finishes
      deck: {
        topic: ''
      },
      // initially this deck has not been deleted yet
      deleted: false,
      updated: false
    }
    // redirect: false -- removed from state, can put back in if needed
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
      .then(res => console.log('THIS IS THE', res.data.deck))
      // .then(res => this.state.data.concat([ data ]))
      // .then(res => this.setState({ deck: res.data.deck }))
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

      const editedDeck = Object.assign({}, prevState.item, updatedField)
      return { deck: editedDeck }
    })
  }

  // updateDeck = (editedTopic) => {
  //   const { msgAlert } = this.props
  //   // this.setState({ redirected: true })
  //   return axios({
  //     url: `${apiUrl}/decks/${this.props.user.token}/`,
  //     method: 'PATCH',
  //     data: {
  //       deck: {
  //         topic: editedTopic
  //       }
  //     },
  //     headers: {
  //       'Authorization': `Token ${this.props.user.token}`
  //     }
  //   })
  //     .then(res => this.props.setDeck(res.data.deck))
  //     .then(() => msgAlert({
  //       heading: 'Edited deck successfully!',
  //       message: messages.editedDeckSuccess,
  //       variant: 'success'
  //     }))
  //     .catch(error => msgAlert({
  //       heading: 'Could not edit because: ' + error.message,
  //       message: messages.editedDeckFailure,
  //       variant: 'danger'
  //     })
  //     )
  // }

  destroyDeck = (deck) => {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/decks/${this.props.match.params.id}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      // update the `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: `Deleted ${deck.topic} successfully!`,
        message: messages.deleteDeckSuccess,
        variant: 'success'
      }))
      .then(console.log('DELETED THE BOOK'))
      .then(res => {
        this.props.history.push('/decks')
      })
      .catch(console.error())
  }

  render () {
    // .map can only be used on an array, not an object.
    // const singleDeck = this.props > 0
    //   ? this.state.deck.map(deck => (

    //   )) : <span></span>
    const { deck, deleted } = this.state

    if (!deck) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // console.log('REACHED LINE 128 OF DECK.JS')
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/decks',
        state: { msgAlert: 'Deleted deck successfully' }
      }} />
    }

    // if (redirected) {
    //   return <Redirect to={{ pathname: '/decks' }} />
    // }

    // below was remved from Fragment in return
    //   <div className='row'>
    //     {this.state.deck.topic}
    //   </div>
    // </div>

    // <Link to={`/decks/${this.props.match.params.id}/deck-delete`}><button>Delete this deck</button></Link>
    // {singleDeck}
    return (
      <Fragment>
        <div className='container deck-page' key={deck.id}>
          <div className='row'>
            <Card className='col-sm-4'>
              <Card.Title>
                {deck.topic}
              </Card.Title>
            </Card>
            <Link to='/decks/:id/deck-update'><button>Update this deck</button></Link>
            <button onClick={this.destroyDeck}>Delete this deck</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Deck)
