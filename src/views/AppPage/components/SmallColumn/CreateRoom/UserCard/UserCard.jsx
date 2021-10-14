import React from 'react'
import { useState } from 'react'
import { socket } from '../../../../AppPage'
import { useSelector } from 'react-redux'


function UserCard({ user, setAppDisplayState, ...props }) {
    const [isSelected, setIsSelected] = useState(false)
    const loggedUserId = useSelector(state => state.user.userData._id)
    const users = [user._id, loggedUserId]

    const createNewRoom = () => {
        socket.emit('createRoom', users)
        setAppDisplayState({
            showProfile: false,
            showCreateRoom: false,
            showDisplayLastChatsColumn: true,
        })

    }

    return (
        <div className="d-flex pr-3" onClick={() => { createNewRoom() }}>

            <div className="p-3 ">
                <img className="avatar-chat-room" src={user.avatar} height='48' width="48" alt="" />
            </div>
            <div className="d-flex align-items-center w-100 border-bottom">
                <div className="d-flex pr-2 py-2 pl-0 w-100 justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="mb-0">{user.name}</p>
                        <p className="mb-0 text-truncate text-secondary"><small>{user.bio}</small></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserCard
