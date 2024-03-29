import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
function Herosection() {
  return (
    <>
      <div className="hero-container">
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you looking for?</p>
        <div className="hero-btns">
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            SET STARTED
          </Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Herosection