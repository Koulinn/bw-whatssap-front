import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setUserLoggedOut } from '../../../../../../redux/actions'
import { socket } from '../../../../AppPage'

export const UserMenuTab = ({ setAppDisplayState, ...props }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const logOut = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}user/logout`, { withCredentials: true })
            if (response.statusText === 'OK') {
                console.log('logout success')
                socket.emit('forceDisconnect')
                dispatch(setUserLoggedOut())
                window.localStorage.clear()
                history.push('/login')
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="userMenus" className="bg-white position-absolute py-3">
            <ul className="m-0 pl-0 px-3">
                <li className="mt-2 px-3" onClick={() => setAppDisplayState({
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
