import apiUrl from '../apiConfig'
import axios from 'axios'

// May need this export in the future when any user can access
// some part of the app

// export const getUsers = () => {
//   return axios(apiUrl + '/users/')
// }

export const getUser = (id) => {
  return axios(apiUrl + '/users/' + id)
}

export const indexDecks = user => {
  return axios({
    url: apiUrl + '/decks/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const showDeck = (user, deckId) => {
  return axios({
    url: `${apiUrl}/decks/${deckId}`,
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const deleteDeck = (user, deckId) => {
  return axios({
    url: `${apiUrl}/decks/${deckId}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const editDeck = (user, deckId, editedTopic) => {
  return axios({
    url: `${apiUrl}/decks/${deckId}`,
    method: 'PATCH',
    data: {
      deck: {
        topic: editedTopic
      }
    },
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const CreateDeck = (user, deckId, createdTopic) => {
  return axios({
    url: `${apiUrl}/decks/${deckId}`,
    method: 'POST',
    data: {
      deck: {
        topic: createdTopic
      }
    },
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
