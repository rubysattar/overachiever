import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'
// import { showDeck, deleteDeck, editDeck } from '../../api/DecksApi'

// Import axios so we can make HTTP requests
import axios from 'axios'

class Deck extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our deck state will be null, until the API request finishes
      deck: null,
      // initially this deck has not been deleted yet
      deleted: false,
      updated: false
    }
    // redirect: false -- removed from state, can put back in if needed
  }
  componentDidMount () {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/decks/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      data: { deck: this.state.deck }
    })
      .then(res => this.setState({ item: res.data.item }))
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

  handleClick = () => {
    this.setState({ redirected: true })
  }

  destroyDeck = () => {
    const { msgAlert } = this.props
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })
      // update the `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Deck Successfully',
        message: messages.deleteDeckSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Delete Deck Failure' + error.message,
          message: messages.deleteDeckFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { deck, deleted } = this.state
will need to pass in 'redirected' above if I use that state

    if (!deck) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/decks',
        state: { msgAlert: 'Deleted deck successfully' }
      }} />
    }

    if (redirected) {
      return <Redirect to={{ pathname: '/decks' }} />
    }

    return (
      <div className="deck">
        <h7>{deck.topic}</h7><br/>
        <p> </p>
        <p>owner: {deck.owner.email}</p>
        <p>cards: {deck.cards}</p>
        <button onClick={this.handleClick}>Edit</button>
        <button onClick={this.destroyDeck}>Delete</button><br/>
        {/* <Link to={`/items/${this.props.match.params.id}/update`}>
          <button>Update</button>
        </Link> */}
        <p></p><br/>
        <Link to='/decks/'>Back to all decks</Link>
      </div>
    )
  }
}

export default Deck
