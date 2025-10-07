import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { watchImg, rightImg } from '../utils/index.js'
import VideoCarousal from './VideoCarousal.jsx'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      
      
    })

    gsap.to('.link', {
      opacity: 1,
      y: 0,
     duration:1,
      stagger:0.25
      
    })
  }, [])

  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-pading bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link opacity-0 translate-y-10'>Watch the film</p>
            <img src={watchImg} alt="watch" className='ml-2 link opacity-0 translate-y-10' />
            <p className='link opacity-0 translate-y-10'>Watch the event</p>
            <img src={rightImg} alt="right" className='ml-2 link opacity-0 translate-y-10' />
          </div>
        </div>
        <VideoCarousal/>
      </div>
    </section>
  )
}

export default Highlights
