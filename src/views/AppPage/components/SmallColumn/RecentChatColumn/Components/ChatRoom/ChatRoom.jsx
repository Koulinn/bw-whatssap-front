import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { socket } from '../../../../../AppPage'
import { useState } from 'react'

export const ChatRoom = ({chat, setCurrentChat, ...props}) => {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMember = chat.members.filter(member=> member._id !== loggedUserId)[0]

    
   
    return (
        <div className="d-flex pr-3" onClick={()=>{
                // socket.emit('updateChatMessagesToTheReceiver', chat._id.toString())
                // socket.on('sendAllChatMessages',(payload)=>{
                //     console.log(payload, 'CHAT room payload')
                //     setCurrentChat(payload)})
                
                setCurrentChat(chat)

            
            }}>
            <div className="p-3 ">
                <img className="avatar-chat-room" src={chatMember.avatar} height='48' width="48" alt="" />
            </div>
            <div className="d-flex align-items-center w-100 border-bottom">
                <div className="d-flex pr-2 py-2 pl-0 w-100 justify-content-between">
                    <div className="d-flex flex-column">
                        
                        <p className="mb-0 max-text-size-190">{chatMember.name}</p>
                        <p className="mb-0 text-truncate text-secondary max-text-size-190"><small>{chatMember.bio ? chatMember.bio : 'Last Message' }</small></p>
                    </div>
                    <div className="d-flex flex-column">
                        <small>{chat.updatedAt}</small>
    
                    </div>
                </div>
            </div>
            
        </div>
    )
}




export default ChatRoom
