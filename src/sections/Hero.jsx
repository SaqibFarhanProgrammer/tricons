import React from 'react'

function Hero() {
  return (
    <div className='relative w-full h-screen bg-white overflow-hidden flex items-center justify-center'>

      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center pt-16'>

        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl font-semibold">
          We Design & Build Digital Experiences That Grow Brands
        </h1>

        <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-xl mt-5 md:mt-6">
          Tricons is a creative digital agency focused on web design, mobile apps, branding, UI/UX design, and performance marketing that helps businesses scale online.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 md:mt-10">

          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a Project
          </a>

          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-black text-sm tracking-wide rounded-full border border-black/20 hover:bg-black/5 transition-all duration-300"
          >
            View Our Work
          </a>

        </div>

      </div>

    </div>
  )
}

export default Hero