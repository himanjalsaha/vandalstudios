import React from 'react'
import About from '../components/About'
import AnimatedTitle from '../components/AnimatedTitle'
import HeroImages from '../components/HeroTeam'
import Hero from '../components/Hero'
import Story from '../components/Story'
import TeamMembers from '../components/Team'
const Team = () => {
  return (
    <div className=' relative min-h-screen  w-screen  overflow-x-hidden'>
  
<HeroImages/>
<TeamMembers/>
    </div>
  )
}

export default Team