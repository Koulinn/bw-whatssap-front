import React from 'react'
import { useState } from 'react'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'


function UserCard({ bio, name, setAppDisplayState, ...props }) {
    const [isSelected, setIsSelected] = useState(false)
    const loggedUserId = useSelector(state => state.user.userData._id)



    // create function on Click send to list of chat participants
    const ADDRESS = process.env.REACT_APP_SOCKET_URL
    const socket = io(ADDRESS, { transports: ['websocket'] })
    const users = [props.user._id, loggedUserId]

    const createNewRoom = () => {
        socket.emit('createRoom', users)
        setAppDisplayState({
            showProfile: false,
            showCreateRoom: false,
            showDisplayLastChatsColumn: true
        })
    }

    return (
        <div className="d-flex pr-3" onClick={() => { createNewRoom() }}>

            <div className="p-3 ">
                <img className="avatar-chat-room" src="https://picsum.photos/200/300" height='48' width="48" alt="" />
            </div>
            <div className="d-flex align-items-center w-100 border-bottom">
                <div className="d-flex pr-2 py-2 pl-0 w-100 justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="mb-0">{name}</p>
                        <p className="mb-0 text-truncate text-secondary"><small>{bio}</small></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserCard
