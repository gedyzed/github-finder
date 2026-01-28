import { useContext, useEffect } from 'react'
import { GithubContext } from '../context/Github/GithubContext'
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
    <div className="w-full mx-auto lg:w-10/12 fade-in-up">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost hover:bg-base-200">
          Back to Search
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full bg-base-100/50 backdrop-blur-md border border-white/5">
            <figure className='relative overflow-hidden'>
              <img src={avatar_url} alt="" className='transition-transform duration-500 hover:scale-105' />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {type && <div className="badge badge-accent badge-lg shadow-lg">{type}</div>}
                {hireable && <div className="badge badge-info badge-lg shadow-lg">Hireable</div>}
              </div>
            </figure>
            <div className="card-body justify-end bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="card-title text-white text-3xl font-bold mb-0">
                {name}
              </h2>
              <p className="flex-grow-0 text-white/80">@{login}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title font-bold bg-secondary bg-clip-text text-transparent pb-4">
              {name}
            </h1>
            <p className='text-lg leading-relaxed opacity-80 mb-6'>{bio}</p>

            <div className="mt-4 card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-secondary rounded-full px-8"
              >
                Visit Github Profile
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-md bg-base-100/40 backdrop-blur border border-white/5 stats stats-vertical lg:stats-horizontal my-6">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="stat-value text-lg font-medium">{location}</div>
              </div>
            )}

            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="stat-value text-lg font-medium">
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer" className="link link-hover text-primary">
                    {blog}
                  </a>
                </div>
              </div>
            )}

            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="stat-value text-lg font-medium">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-hover text-primary"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100/40 backdrop-blur border border-white/5 stats stats-vertical lg:stats-horizontal">
        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {followers}
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {following}
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_repos}
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Gists</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {public_gists}
          </div>
        </div>
      </div>

      <ReposList repos={repos} />
    </div>
  )
}

export default User
