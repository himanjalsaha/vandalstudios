import React from 'react'
import About from '../components/About'
import AnimatedTitle from '../components/AnimatedTitle'
import HeroImages from '../components/HeroTeam'
import Hero from '../components/Hero'
import Story from '../components/Story'
import TeamMembers from '../components/Team'
import { useEffect } from 'react'
const Team = () => {
    useEffect(() => {
        // Scroll to top when this page is loaded
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className=' relative min-h-screen  w-screen  overflow-x-hidden'>
  
<HeroImages/>
<TeamMembers/>
    </div>
  )
}

export default Team