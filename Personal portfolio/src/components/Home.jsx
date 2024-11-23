import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="container-service h-4/5">
        <div className="container flex justify-around">
          <div className="home-left pl-12">
            <h3 className='text-purple-500 font-bold text-4xl tracking-wide'>Hello,</h3>
            <h2 className='text-purple-500 font-bold text-6xl tracking-wide' >I am a</h2>
            <h1 className='text-purple-500 font-bold text-7xl tracking-wide'>Full Stack Developer</h1>

            <div className="button  mt-16">
              <button className=' bg-purple-500 p-6 rounded-ss-3xl text-white font-bold'>Hire Me!</button>

            </div>
          </div>
          <div className="home-right">
            <img src="main image.png" className='max-h-96' alt="" />
          </div>
        </div>
        

          
      </div>

    




    </>
  )
}

export default Home