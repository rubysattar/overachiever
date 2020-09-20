import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

// Try to figure out why the form won't show the current deck.topic
const UpdateDeckForm = ({ deck, handleSubmit, handleChange, cancelPath }) => (
  <div className='update-form'>
    <h4>{deck.topic}</h4><br/>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextArea1">
        <Form.Label value={deck.topic}>Edit this deck</Form.Label>
        <Form.Control as="textarea" rows="3" value={deck.topic} name='topic' onChange={handleChange}/>
      </Form.Group>
      <button type='submit'>Submit Changes</button>
      <Link to='/decks/'>
        <button>Cancel</button>
      </Link><br/>
      {/* <Link to='/decks/'>Back to all decks</Link> */}
    </Form>
  </div>
)

export default UpdateDeckForm
