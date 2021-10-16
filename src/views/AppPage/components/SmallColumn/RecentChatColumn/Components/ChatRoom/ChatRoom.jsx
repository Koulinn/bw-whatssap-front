import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { socket } from '../../../../../AppPage'
import { useState } from 'react'
import { setRoomToDisplay } from '../../../../../../../redux/actions/chat-actions'
import {format} from 'date-fns'

export const ChatRoom = ({ chat, setShowChatComponent, setSetCurrentDisplayedChatID }) => {
    const loggedUserId = useSelector(s => s.user.userData._id)
    const dispatch = useDispatch()
    const chatMember = chat.members.filter(member => member._id !== loggedUserId)[0]

    const isGroup = chat.members.length > 2
    const genericGroupImage= 'https://thumbs.dreamstime.com/z/line-users-group-icon-isolated-grey-background-people-business-avatar-symbol-profile-colorful-outline-concept-vector-194065612.jpg'

    const groupImage= chat.image? chat.image : genericGroupImage
    const connectToRoom = ()=> {
        socket.emit('connectToSelectedRoom', chat._id )
    }


    return (
        <div className="d-flex pr-3" onClick={() => {
            setSetCurrentDisplayedChatID(chat._id)
            dispatch(setRoomToDisplay(chat))
            setShowChatComponent(true)
            console.log(chat._id, 'CHAT ID FROM ROOM CARD')
            connectToRoom(chat._id)
        }}>
            <div className="p-3">
                <img className="avatar-chat-room" src={isGroup ? groupImage : chatMember.avatar} height='48' width="48" alt="" />
            </div>
            <div className="d-flex align-items-center w-100 border-bottom">
                <div className="d-flex pr-2 py-2 pl-0 w-100 justify-content-between">
                    <div className="d-flex flex-column">

                        <p className="mb-0 max-text-size-190">{isGroup ? `You and ${chat.members.length}` : chatMember.name}</p>
                        <p className="mb-0 text-truncate text-secondary max-text-size-190"><small>{chatMember.bio ? chatMember.bio : 'Last Message'}</small></p>
                    </div>
                    <div className="d-flex flex-column">
                        <small>{format(new Date (chat.updatedAt), 'H:mm')}</small>

                    </div>
                </div>
            </div>

        </div>
    )
}




export default ChatRoom
