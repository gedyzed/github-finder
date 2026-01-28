import React, { useContext, useState, useEffect } from 'react'
import { GithubContext } from '../../context/Github/GithubContext';
import Alert from '../Alert';
import AlertContext from '../../context/alert/AlertContext';
import { FaSearch, FaTimes } from 'react-icons/fa';

const UserSearch = () => {
    const [text, setText] = useState('');
    const { users, searchUsers, dispatch } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext)

    useEffect(() => {
        if (text === '') {
            dispatch({ type: 'CLEAR_USER' })
            return
        }

        const timer = setTimeout(() => {
            searchUsers(text)
        }, 500)

        return () => clearTimeout(timer)
    }, [text, searchUsers, dispatch])

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert("please insert something!", 'error');
        } else {
            searchUsers(text)
        }
    }

    const handleClick = () => {
        setText("");
        dispatch({ type: 'CLEAR_USER' })
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <Alert />
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-500" size={18} />
                            </div>
                            <input
                                type="text"
                                className='w-full pl-12 pr-12 bg-gray-200 input input-lg text-black focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl shadow-inner'
                                placeholder='Search Users...'
                                onChange={handleChange}
                                value={text}
                            />
                            {text !== '' && (
                                <button
                                    type="button"
                                    onClick={handleClick}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <div className='btn btn-ghost btn-circle btn-sm hover:bg-gray-300'>
                                        <FaTimes className="text-gray-600" size={16} />
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div className='flex items-center px-4'>
                    <div className="badge badge-lg badge-outline gap-2 p-4">
                        <span className="font-bold">{users.length}</span> results found
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserSearch
