import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


import {useHistory} from 'react-router-dom'

export const UserMenuTab = ({setAppDisplayState, ...props}) => {
    const history = useHistory()

    const logOut = async () => {
        // window.localStorage.clear()
        // console.log(props, 'from User menu')
        // history.push('/login')

        // props.history.push('/login')
        try {
            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}user/logout`, { withCredentials: true })
            if (response.statusText === 'OK') {
               console.log('logout success')
               window.localStorage.clear()
               history.push('/login')
            } else {
                console.log('fetche me else')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="userMenus" className="bg-white position-absolute py-3">
            <ul className="m-0 pl-0 px-3">
                <li className="mt-2 px-3" onClick={()=> setAppDisplayState({
                    showProfile: false,
                    showCreateRoom: true,
                    showDisplayLastChatsColumn: false
                })}>
                   New group
                </li>
                <li className="my-3 px-3">
                    Starred
                </li>
                <li className="mb-3 px-3">
                    Settings
                </li>
                <li className="mb-2 px-3" onClick={logOut}>
                    Log out
                </li>
            </ul>
            
        </div>
    )
}



export default UserMenuTab
