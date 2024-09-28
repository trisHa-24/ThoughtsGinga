import React from 'react'

import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
    return (
        <button 
          onClick={logoutHandler} 
          className='inline-block text-lg font-semibold text-white px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'>
            Logout
        </button>
    )
}

export default LogoutBtn
