import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const CreateCardsForm = ({ card, handleSubmit, handleChange, cancelPath }) => (
  <div className="create-form">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextArea1">
        <h4>Create a Card!</h4><br/>
        <Form.Label>Card Question:</Form.Label>
        <Form.Control as="textarea" rows="3" value={card.question} name='question' onChange={handleChange}/>
        <Form.Label>Card Answer:</Form.Label>
        <Form.Control as="textarea" rows="3" value={card.answer} name='answer' onChange={handleChange}/>
      </Form.Group>
      <button type='submit'>Submit</button>
      <Link to='/cards'>
        <button>Cancel</button>
      </Link><br/>
      {/* <Link to='/decks/'><button>Back to all decks</button></Link> */}
    </Form>
  </div>
)
export default CreateCardsForm
