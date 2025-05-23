import React from 'react'
import RepoItem from './RepoItem';

const ReposList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {repos.map((repo) => <RepoItem repo={repo} /> )}
      </div>
    </div>

  )
}

export default ReposList;
