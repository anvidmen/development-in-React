import React from 'react'

export default function Footer () {
  return (
    <div className='footer-style'>
      <div className='m-2'>
        <a href='https://www.linkedin.com/in/juan-om' className='fab' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
      </div>
      <div className='m-2'>
        <a href='https://github.com/anvidmen' className='fab' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
      </div>
      <div className='m-2'>© Juan David Omen&nbsp; {new Date().getFullYear()}</div>
    </div>
  )
}
