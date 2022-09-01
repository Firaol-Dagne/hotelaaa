import React from 'react'
import Slide from './Slide'
import Data from './Data'
import "./Home.css";

function Hero() {
  return (
    <>
       <Slide Slides={Data}/>
    </>
  )
}

export default Hero