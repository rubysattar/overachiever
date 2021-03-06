import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import HomeView from '../Home/Home'
import Decks from '../Decks/AllDecks'
import Deck from '../Decks/Deck'
import DeckUpdate from '../Decks/DeckUpdate'
import DecksCreate from '../Decks/DecksCreate'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      decks: [],
      msgAlerts: []
    }
  }

  setDeck = (deckId) => this.setState({ deckId })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact path='/' render={() => (
            <HomeView />
          )} />
          <AuthenticatedRoute user={user} exact path='/decks' render={() => (
            <Decks user={user} setDeck={this.setDeck} msgAlert={this.msgAlert}/>
          )}/>
          <AuthenticatedRoute user={user} exact path='/decks-create' render={({ match }) => (
            <DecksCreate user={user} match={match} msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/decks/:id/deck-update' render={({ match }) => (
            <DeckUpdate user={user} match={match} msgAlert={this.msgAlert} setDeck={this.setDeck}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/decks/:id' render={({ match }) => (
            <Deck user={user} match={match} msgAlert={this.msgAlert} setDeck={this.setDeck}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
