import React from 'react'
import Button from '../componets/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex w-full min-h-screen gap-10 p-2 border-2 border-red-500 xl:flex-row-col max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
      <p>Our Summer collection</p>
      <h1>
        <span>The New Arrival</span>
        <br />
        <span>Nike</span>
        Shoes
      </h1>

      <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

    
      </div>
    </section>
  )
}

export default Hero