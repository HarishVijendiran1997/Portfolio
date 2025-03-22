import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import nodejs from '../assets/node-js.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import jwt from '../assets/jwt.png'

const Skills = () => {
    return (
        <>
            <div className='border border-gray-800 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-[150px] max-w-[1200px] md:rounded-t-4xl mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>

                {/* Tech Title */}
                <div className='flex items-center'>
                    <h2 className='text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-4'>
                        My<br />Front-end<br />Stack
                    </h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" className='animation-pulse duration-150' /></svg>
                </div>

                {/* HTML */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={html} alt='HTML' width={100} height={100} />
                    <p className='mt-2'>HTML</p>
                </div>

                {/* CSS */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={css} alt='CSS' width={100} height={100} />
                    <p className='mt-2'>CSS</p>
                </div>

                {/* JavaScript */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={javascript} alt='JavaScript' width={100} height={100} />
                    <p className='mt-2'>JavaScript</p>
                </div>

                {/* Tailwind CSS */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={tailwind} alt='Tailwind CSS' width={100} height={100} />
                    <p className='mt-2'>Tailwind</p>
                </div>

                {/* React */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={react} alt='React' width={100} height={100} />
                    <p className='mt-2'>React</p>
                </div>

            </div>

            {/* Backend */}
            <div className='border border-gray-800 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-[150px] max-w-[1200px] md:rounded-b-4xl mx-auto grid grid-cols-3    place-items-center md:flex md:justify-between md:items-center'>

                {/* Tech Title */}
                <div className='flex items-center'>
                    <h2 className='text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-5.5'>
                        My<br />Back-end<br />Stack
                    </h2>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" className='animation-pulse duration-150' /></svg>
                </div>

                {/* Node js */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[140px]'>
                    <img src={nodejs} alt='NodeJs' width={130} height={130} />
                    <p className='mt-2'>Node Js</p>
                </div>

                {/* express */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={express} alt='Express' width={100} height={100} />
                    <p className='Express'>Express</p>
                </div>

                {/* mongodb */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={mongodb} alt='MongoDB' width={100} height={100} />
                    <p className='mt-2'>MongoDB</p>
                </div>

                {/* mysql */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[130px]'>
                    <img src={mysql} alt='MySQL' width={150} height={150} />
                    <p className='mt-2'>MySQL</p>
                </div>

                {/* jwt */}
                <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                    <img src={jwt} alt='JWT' width={100} height={100} />
                    <p className='mt-2'>JWT</p>
                </div>

            </div>

        </>
    )
}

export default Skills