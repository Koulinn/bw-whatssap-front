import React from 'react'
import { useState } from 'react'
import { socket } from '../../../../AppPage'
import { useSelector, useDispatch } from 'react-redux'
import { setNewRoom } from '../../../../../../redux/actions/chat-actions.js'


function UserCard({ user, selectedUsersId,setSelectedUsersId, setAppDisplayState,selectedUsers, setSelectedUsers, ...props }) {
    const [isSelected, setIsSelected] = useState(false)
    const loggedUserId = useSelector(state => state.user.userData._id)
    const users = [user._id, loggedUserId]
    const allOpenRooms = useSelector(s => s.chat.allChatsRooms)
    const dispatch = useDispatch()

    const addSelectedUser = (user) => {
        setSelectedUsers([...selectedUsers, user])
        setSelectedUsersId([...selectedUsersId, user._id])
    }



    return (
        <div className="d-flex pr-3" onClick={() => { addSelectedUser(user) }}>

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
