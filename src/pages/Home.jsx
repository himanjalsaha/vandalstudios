import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Component from '../components/Footer'
import Story from  '../components/Story'

const Home = () => {
  return (
    <div className=' relative min-h-screen  w-screen  overflow-x-hidden'>
       <Hero/>
       <About imageStyle="about-image"/>
       <Features/>
       <Story/>
       <Contact/>
   
    </div>
 
  )
}

export default Home