import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    return (
        <div className="card card-side shadow-md my-1">
            <div className="flex flex-row items-center space-x-5">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{user.login}</h2>
                    <Link className="text-neutral-500 text-opacity-40" to={`/user/${user.login}`}>
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
