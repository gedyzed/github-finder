import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center align-center'>
        <h6 className="text-9xl font-bold p-5">Oops!</h6>  
        <h4 className='text-5xl p-5'>404-Page Not Found!</h4>
        <Link to="/" className='flex items-center text-3xl bg-secondary rounded-2xl p-5'><FaHome size={40}/>Back to Home
        </Link>
    </div>
  )
}

export default NotFound
