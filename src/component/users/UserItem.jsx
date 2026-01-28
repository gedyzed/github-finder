import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    return (
        <Link to={`/user/${user.login}`} className="card card-side shadow-md my-1 bg-base-100 hover:bg-base-200 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-base-300">
            <div className="flex flex-row items-center space-x-5 px-6 py-4 w-full">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{user.login}</h2>
                    <span className="text-base-content/60 text-sm">
                        Visit Profile
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default UserItem
