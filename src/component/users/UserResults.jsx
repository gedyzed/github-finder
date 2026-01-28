import { useContext } from 'react'
import Spinner from '../Spinner';
import UserItem from './UserItem';
import { GithubContext } from '../../context/Github/GithubContext';

const UserResults = () => {
    const { users, loading } = useContext(GithubContext);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2'>
            {loading ? <Spinner /> :
                users.map((user) => (<UserItem user={user} />))
            }
        </div>
    )

}

export default UserResults
