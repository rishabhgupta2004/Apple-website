import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils/index.js'

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )
  const videoRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const newSrc = window.innerWidth < 760 ? smallHeroVideo : heroVideo
      setVideoSrc(newSrc)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [videoSrc])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, duration: 1, delay: 0.5 })
    gsap.to('#cta',{opacity:1,y:-50,delay:2})
  },[])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col gap-6">
        <p id="hero" className="hero-title opacity-0">iPhone 15 Pro</p>

        <div className="md:w-10/12 w-9/12">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
 <a href ="highlights" className='btn'>Buy</a>
 <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
