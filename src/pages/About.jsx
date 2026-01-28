import React from 'react'

function About() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh]'>
      <div className='card bg-base-100/30 backdrop-blur-lg shadow-xl border border-white/10 p-10 max-w-2xl w-full'>
        <h1 className='text-6xl mb-4 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text'>
          Github Finder
        </h1>
        <p className='mb-6 text-2xl font-light leading-relaxed'>
          A modern React application to search GitHub profiles and explore repository details with ease.
        </p>
        <div className='divider'></div>
        <div className='flex flex-col gap-4'>
          <p className='text-lg'>
            <span className='font-bold opacity-70'>Version:</span> 1.0.1
          </p>
          <p className='text-lg'>
            <span className='font-bold opacity-70'>Stack:</span> React, Tailwind CSS, DaisyUI, GitHub API
          </p>
        </div>
        <div className='card-actions justify-end mt-8'>
          <a
            href='https://github.com/gedyzed'
            target='_blank'
            rel='noreferrer'
            className='btn btn-secondary btn-outline rounded-full'
          >
            View Developer
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
