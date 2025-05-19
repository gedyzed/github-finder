import React, { useContext, useState } from 'react'
import GithubContext from '../../context/Github/GithubContext';
import Alert from '../alert';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value)
    const { users, searchUsers, dispatch  } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext)
 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert("please insert something!", 'error');
        } else {
            searchUsers(text)
            setText("");
        }

    }

    const handleClick = () => {
        dispatch({type: 'CLEAR_USER'})
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <Alert />
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                onChange={handleChange}
                                value={text}
                            />
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none btn btn-lg">
                                GO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={handleClick}  className="btn btn-ghost btn-lg rounded">Clear</button>
                </div>
            )}

        </div>
    )
}

export default UserSearch
