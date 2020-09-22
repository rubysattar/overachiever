import React from 'react'
import Card from 'react-bootstrap/Card'
// import styles from './Home.css'

// import Carousel from 'react-bootstrap/Carousel'
// import InspirationImg from './deckhome.jpg'
// import PinkStudy from './pinkstudy.jpg'
// import Books from './books.jpg'

// image source isn't recognizing path to image in file
// commented out below is a previous (incorrect) skeleton that
// contains live links of the images

function HomeView () {
  return (
  // <Carousel>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src={Books}
  //       alt="A mess of books"
  //     />
  //     <Carousel.Caption>
  //       <h3>Need help studying?</h3>
  //       <p></p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src={PinkStudy}
  //       alt="Coffee and books"
  //     />

  //     <Carousel.Caption>
  //       <h3></h3>
  //       <p></p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src={InspirationImg}
  //       alt="Inspirational card"
  //     />

  //     <Carousel.Caption>
  //       <h3>Study your own way.</h3>
  //       <p>Try using our flash card app!</p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>

    <div className='container home-page-container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Card className='home-page'>
            {/* <Card.Title className='home-page-title'>Are you an overachiever who loves using tools that help you get ahead?</Card.Title> */}
            <Card.Text className='home-page-text'><h3><span className='welcome-title'>Doing more worrying than studying?</span></h3><br></br>Well, this isn&apos;t a meditation app, but it can help you create flash cards!</Card.Text>
            {/* <img src='../../images/deckhome.jpg' alt=''/> */}
            {/* <Card.Footer>*The topics of your decks CAN be about whatever you choose... until we place limits on deck topics.</Card.Footer> */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomeView
