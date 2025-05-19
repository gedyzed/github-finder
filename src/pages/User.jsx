import { useContext, useEffect } from 'react'
import GithubContext from '../context/Github/GithubContext'
import { useParams, Link } from 'react-router-dom';
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from 'react-icons/fa';
import ReposList from '../component/users/ReposList';



const User = () => {

  const { user, getUser, repos, getUserRepos } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login)
    getUserRepos(params.login)
  }, [])



  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user



  return (
    <>
      <div className="container flex flex-col gap-4">
        {/* Back Button */}
        <div>
          <Link to="/" className="btn btn-ghost">Back to Search</Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-4 md:flex-row md:text-2xl">
          {/* Profile Image Card */}
          <div className="card bg-base-100 image-full shadow-sm p-0">
            <figure className="w-full"> {/* Adjust height as needed */}
              <img
                src={avatar_url}
                alt="profile_picture"
                className="w-full h-full object-cover"
              />
            </figure>

            {/* <div className="card-body justify-end">
              <h2 className="card-title">{name}</h2>
              <p>{login}</p>
            </div> */}
          </div>


          <div className="card-body p-0">
            <h2 className="card-title flex items-center gap-2 pb-3 md:text-4xl">
              {name}
              {user && <div className="text-green-600 px-2 rounded bg-green-100">User</div>}
              {hireable && <div className="btn btn-info px-2 rounded">Hireable</div>}
            </h2>

            {/* Bio Section */}
            {bio && (
              <div className="text-left text-[1em] lg:text-lg pb-5">
                <p>{bio}</p>
              </div>
            )}

            {/* GitHub Profile Link */}
            <div className='pb-5'>
              <a href={html_url} className="btn btn-outline">VISIT GITHUB PROFILE</a>
            </div>

            {/* Additional Info (Location, Website, Twitter) */}
            <div className="stats stats-vertical shadow sm:stats-horizontal">

              {location && (
                <div className="stat">
                  <div className="stat-title">Location</div>
                  <div className="stat-value text-[1em] lg:text-2xl">{location}</div>
                </div>
              )}


              {blog && (
                <div className="stat">
                  <div className="stat-title ">Website</div>
                  <div className="stat-value text-[1em]  lg:text-2xl">
                    <a href={`https://${blog}`} target="_blank" rel="noopener noreferrer" >
                      {blog}
                    </a>
                  </div>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title">Twitter</div>
                  <div className="stat-value text-[1em] lg:text-2xl">
                    <a href={`https://x.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Infos*/}
        <div className="stats stats-vertical shadow sm:stats-horizontal">
          <div className="stat text-3xl md:text-5xl">
            <div className="stat-figure text-primary">
              <FaUsers />
            </div>
            <div className="stat-title">Followers</div>
            <div className="stat-value text-primary ">{followers}</div>
          </div>

          <div className="stat text-3xl md:text-5xl">
            <div className="stat-figure text-primary ">
              <FaUserFriends />
            </div>
            <div className="stat-title">Following</div>
            <div className="stat-value text-primary text-3xl md:text-5xl">{following}</div>
          </div>

          <div className="stat text-3xl md:text-5xl">
            <div className="stat-figure text-primary ">
              <FaCodepen />
            </div>
            <div className="stat-title">Public Repos</div>
            <div className="stat-value text-primary text-3xl md:text-5xl">{public_repos}</div>
          </div>

          <div className="stat text-3xl md:text-5xl">
            <div className="stat-figure text-primary">
              <FaStore />
            </div>
            <div className="stat-title">Public Gists</div>
            <div className="stat-value text-primary text-3xl md:text-5xl">{public_gists}</div>
          </div>
        </div>

        <ReposList repos={repos} />

      </div>
    </>

  )
}

export default User
