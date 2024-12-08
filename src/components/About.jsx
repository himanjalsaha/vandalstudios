'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedTitle from './AnimatedTitle'
import desktopImage from '../../public/img/land.png'
import mobileImage from '../../public/img/mobile.png'
gsap.registerPlugin(ScrollTrigger)

const About = ({imageStyle , desktopImageurl = desktopImage , mobileImageurl = mobileImage}) => {
  const clipRef = useRef(null)
  const maskRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    if (!clipRef.current || !maskRef.current || !imageRef.current) return

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: clipRef.current,
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })

    clipAnimation
      .to(maskRef.current, {
        width: '100dvw',
        height: '100dvh',
        borderRadius: 0,
      })
      .to(imageRef.current, {
        padding: 0,
      }, '<')
  }, [])

  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          we are vandal *
        </p>

        <AnimatedTitle
          title="From bland <br /> to <b>b</b>rilliant"
          containerClass="mt-5 !text-black text-center hero-heading"
        />

<div className="about-subtext     max-w-2xl text-center">
          <p className="mb-2">Crafting designs that redefine your vision—where creativity meets innovation.</p>
          <p className="text-gray-500">
            At Vandal Studios, we transform ideas into impactful designs, blending expertise with passion to create a legacy of brilliance.
          </p>
        </div>

     
      </div>

      <div ref={clipRef} className="h-dvh w-screen ">
        <div ref={maskRef} className={`mask-clip-path ${imageStyle}`}>
        <picture>
            <source media="(min-width: 768px)" srcSet={desktopImageurl} />
            <img
              ref={imageRef}
              src={mobileImageurl}
              alt="Vandal Studios Design Showcase"
              className="absolute left-0 top-0 h-full w-full object-cover p-10 md:p-0"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default About

