import React from 'react'
import RepoItem from './RepoItem';

const ReposList = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100/50 backdrop-blur-md border border-white/5'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title text-secondary'>
          Latest Repositories
        </h2>
        <div className='grid grid-cols-2 gap-4'>
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReposList;
