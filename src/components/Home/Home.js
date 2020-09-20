import React from 'react'
import Card from 'react-bootstrap/Card'
// import styles from './Home.css'

// image source isn't recognizing path to image in file
// commented out below is a previous (incorrect) carousel skeleton that
// contains live links of the images

// wanted to wrap carousel in bootstrap container and row with a new row underneath to enter content

function HomeView () {
  // const homeStyles = {
  //   backgroundImage: 'url(../../images/BG.png)',
  //   background: '#B4DDDB',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Card>
            <Card.Title>This is the home view</Card.Title>
            <Card.Text>where home view stuff will be</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeView
