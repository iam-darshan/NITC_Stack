import React from 'react'
import SemCard from '../componets/SemCard'
import Subjects from '../componets/Subjects'


function Home() {
  return (
    <div className="homeContainer flex flex-col justify-center items-center">
        <SemCard />
        <Subjects />
        
    </div>
  )
}

export default Home