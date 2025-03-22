import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

const project = () => {
  return (
    <div className='scroll-smooth max-w-[1200px] mx-auto p-5' id='project'>

      {/* Project Title */}
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold bg-gradient-to-r bg-pink-500 text-transparent bg-clip-text from-blue-500  to-pink-500  inline-block'>Project</p>
        <p className='text-gray-400'>Check out some of my recent project</p>
      </div>

      {/* Project Grid */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


      {/* Project 1 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj1} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      {/* Project 2 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj2} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      {/* Project 3 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj3} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      {/* Project 4 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj4} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      {/* Project 5 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj5} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      {/* Project 6 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          <img src={proj6} alt="" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'></span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default project