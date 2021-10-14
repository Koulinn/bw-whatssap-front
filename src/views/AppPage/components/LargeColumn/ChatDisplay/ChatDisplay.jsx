import React, {useState, useEffect} from 'react'
import MyMessage from './MyMessage/MyMessage'
import OtherMembersMessage from './OtherMembersMessage/OtherMembersMessage'
import { useSelector, useDispatch } from 'react-redux'
import { socket } from '../../../AppPage'
import { updateCurrentRoomMessage, setToggleRequest } from '../../../../../redux/actions/chat-actions'



export const ChatDisplay = () => {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMessagesHistory = useSelector(s=>s.chat.roomDisplayed.history)
    const toggleRequest = useSelector(s => s.chat.toggleRequest)
    const dispatch = useDispatch()

    useEffect(()=>{
        socket.on('UpdateChatHistory', payload=>{
            dispatch(setToggleRequest())
            dispatch(updateCurrentRoomMessage(payload))
            console.log(payload, 'new message')
        })
    },[toggleRequest])


    
    return (
        <div className="d-flex flex-column messages-wrapper">
           {chatMessagesHistory.map(message =>{
               if(message.sender ===loggedUserId ){
                return <MyMessage key={message._id} message={message}/>
               }else{
                return <OtherMembersMessage  key={message._id} message={message} />
               }
           })}
            {/* <MyMessage/>
            <OtherMembersMessage/>
            <MyMessage/>
            <OtherMembersMessage/>
            <MyMessage/>
            <OtherMembersMessage/> */}
        </div>
    )
}



export default ChatDisplay
