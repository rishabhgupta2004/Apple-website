import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '../utils/animation';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;

    // ✅ Scroll-triggered video playback
    gsap.to(video, {
      scrollTrigger: {
        trigger: video,
        start: 'top 80%', // better trigger point
        toggleActions: 'play pause resume reset',
        onEnter: () => video.play(),
        onLeaveBack: () => video.pause(),
      },
    });

    // ✅ Title Animation
    animateWithGsap('#features_title', { y: 0, opacity: 1 });

    // ✅ Image Scale Animation
    animateWithGsap('.g_grow', {
      scale: 1,
      opacity: 1,
      ease: 'power1.out',
      scrollTrigger: {
        scrub: 2,
      },
    });

    // ✅ Text Fade Animation
    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.g_text',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        {/* ✅ Title Section */}
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story
          </h1>
        </div>

        {/* ✅ Text Section */}
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-12 mb-24 pl-24">
            <h1 className="text-5xl lg:text-7xl font-semibold">iPhone</h1>
            <h1 className="text-5xl lg:text-7xl font-semibold">Forged in</h1>
            <h1 className="text-5xl lg:text-7xl font-semibold">Titanium</h1>
          </div>
        </div>
      </div>

      {/* ✅ Video and Image Section */}
      <div className="flex-center flex-col sm:px-10">
        <div className="relative h-[50vh] w-full flex items-center">
          <video
            ref={videoRef}
            playsInline
            muted
            id="exploreVideo"
            className="w-full object-cover h-full"
          >
            <source src={exploreVideo} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col w-full relative">
          <div className="feature-video-container">
            <div className="overflow-hidden flex-1 h-[50vh]">
              <img
                src={explore1Img}
                alt="titanium"
                className="feature-video g_grow"
              />
            </div>
            <div className="overflow-hidden flex-1 h-[50vh]">
              <img
                src={explore2Img}
                alt="titanium"
                className="feature-video g_grow"
              />
            </div>
          </div>

          <div className="feature-text-container">
            <div className="flex-1 flex-center">
              <p className="feature-text g_text">
                iPhone 15 Pro is{' '}
                <span className="text-white">
                  the first iPhone to feature an aerospace-grade titanium design
                </span>
                , using the same alloy that spacecraft use for missions to Mars.
              </p>
            </div>

            <div className="flex-1 flex-center">
              <p className="feature-text g_text">
                Titanium has one of the best strength-to-weight ratios of any
                metal, making these our{' '}
                <span className="text-white">lightest Pro models ever</span>.
                You'll notice the difference the moment you pick one up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
