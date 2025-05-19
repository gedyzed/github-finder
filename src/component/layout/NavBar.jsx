import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className="navbar shadow-lg bg-base-300 text-neutral-content text-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Aligns to the start */}
                <div className="flex-1 flex items-center px-3 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to="/" className="text-sm lg:text-lg font-bold">Github Finder</Link>
                </div>
                {/* Aligns to the end */}
                <div className="flex">
                    <Link to="/" className='btn btn-ghost hover:bg-base-100 border-none '>Home</Link>
                    <Link to="/about" className='btn btn-ghost hover:bg-base-100 border-none'>About</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
