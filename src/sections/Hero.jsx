import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex w-full min-h-screen gap-10 p-2 border-2 border-red-500 xl:flex-row-col max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
      <p>this is the hero section</p>
      </div>
    </section>
  )
}

export default Hero