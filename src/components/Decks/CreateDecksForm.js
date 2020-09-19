import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const CreateDecksForm = ({ deck, handleSubmit, handleChange, cancelPath }) => (
  <div className="edits">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextArea1">
        <h4>Create a Deck!</h4><br/>
        <Form.Label>New Deck Topic</Form.Label>
        <Form.Control as="textarea" rows="3" value={deck.topic} name='topic' onChange={handleChange}/>
      </Form.Group>
      <button type='submit'>Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link><br/>
      <Link to='/decks/'>Back to all decks</Link>
    </Form>
  </div>
)
export default CreateDecksForm
