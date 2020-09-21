import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'

// import DecksCreate from './DecksCreate'

// Decks index component
// show all decks
class Cards extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    // const { msgAlert } = this.props
    //   make a request for all of the decks
    axios({
      url: (`${apiUrl}/cards/`),
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      }
    })

      .then(res => console.log('INDEXED ALL YOUR CARDS!', res.data))
    //   .then((res) => {
    //     this.setState({ cards: res.data.cards })
    //     if (res.data.cards.length === 0) {
    //       msgAlert({
    //         heading: 'You have no cards to show!',
    //         message: messages.noCards,
    //         variant: 'danger'
    //       })
    //     } else if (res) {
    //       msgAlert({
    //         heading: 'Here are all your cards!',
    //         message: messages.indexDecks,
    //         variant: 'success'
    //       })
    //     }
    //   })
      .catch(console.error)
  }

  render () {
    const cards = this.state.cards.map(card => (
      <Card key={card.id} className='col-sm-4 deck'>
        <Card.Title>
          <Link to={`/cards/${card.id}`} className='deck-title'>{card.question}</Link>
        </Card.Title>
      </Card>
    ))

    return (
      // <Fragment className='all-cards-page'>
      <div className='container all-cards-page'>
        <div className='row'>
          <Link to='/cards-create'><button>Create a Card</button></Link>
        </div>
        <div className='row'>
          {cards}
        </div>
      </div>
      // </Fragment>
    )
  }
}
export default Cards
