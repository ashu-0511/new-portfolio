import React from 'react'
import { ReactTyped } from "react-typed";
import AnimatedBackground from './AnimatedBackground';

function Home() {
  return (
    <div className='h-auto '>
      <AnimatedBackground />
      <div className=' container h-screen flex items-center justify-center flex-col'>
        <h1 className='text-7xl text-center sm:mb-4 -top-5 relative' >Ashutosh Narula</h1>
        <ReactTyped className='text-xl text-home z-20'
          strings={["WEB DEVELOPER", "FRONT END DEVELOPER"]}
          typeSpeed={60}
        />
        <button className="btn text-btn p-2 border-2 mt-6 text-contact border-btn rounded transition-transform duration-400 ease-custom opacity-80 hover:scale-110 hover:opacity-100" type="button">CONTACT ME</button>
      </div>
    </div>
  )
}

export default Home