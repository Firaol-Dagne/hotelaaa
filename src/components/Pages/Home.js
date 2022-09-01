import React from 'react'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Download from '../HomeSection/Download/Download'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import Works from '../HomeSection/Works/Works'
import MostPopular from '../HomeSection/popular/MostPopular'
import Gallery from '../HomeSection/gallery/Gallery'

function Home() {
  return (
    <>
    <Hero/>
    <HomeAbout/>
    <MostPopular />
    <DestinationHome/>
    <Download/>
    <Works />
    <Gallery/>
    </>
  )
}

export default Home