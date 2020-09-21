import React from 'react'
import Card from 'react-bootstrap/Card'
// import styles from './Home.css'

// image source isn't recognizing path to image in file
// commented out below is a previous (incorrect) skeleton that
// contains live links of the images

function HomeView () {
  return (
    <div className='container home-page-container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Card className='home-page'>
            <Card.Title className='home-page-title'>Are you an overachiever who loves tools to help you get ahead?</Card.Title>
            <Card.Text className='home-page-text'>There&apos;s an app for that!<br></br> Welcome to OverAchiever, where you can customize decks of flashcards to help you study anything! Really, anything*!</Card.Text>
            {/* <img src='../../images/deckhome.jpg' alt=''/> */}
            {/* <Card.Footer>*The topics of your decks CAN be about whatever you choose... until we place limits on deck topics.</Card.Footer> */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeView
