import React from 'react'
import MyMessage from './MyMessage/MyMessage'
import OtherMembersMessage from './OtherMembersMessage/OtherMembersMessage'
import { useSelector } from 'react-redux'

export const ChatDisplay = ({showCurrentChat}) => {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    
    const {history} = showCurrentChat
    return (
        <div className="d-flex flex-column h-100 messages-wrapper">
           {history.map(message =>{
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
