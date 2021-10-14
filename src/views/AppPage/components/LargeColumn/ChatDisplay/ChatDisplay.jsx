import React, {useState, useEffect} from 'react'
import MyMessage from './MyMessage/MyMessage'
import OtherMembersMessage from './OtherMembersMessage/OtherMembersMessage'
import { useSelector, useDispatch } from 'react-redux'
import { socket } from '../../../AppPage'
import { updateCurrentRoomMessage } from '../../../../../redux/actions/chat-actions'



export const ChatDisplay = () => {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMessagesHistory = useSelector(s=>s.chat.roomDisplayed.history)


    
    return (
        <div className="d-flex flex-column messages-wrapper">
           {chatMessagesHistory.map(message =>{
               if(message.sender ===loggedUserId ){
                return <MyMessage message={message}/>
               }else{
                return <OtherMembersMessage message={message} />
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
