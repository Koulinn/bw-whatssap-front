import React, {useState, useEffect} from 'react'
import MyMessage from './MyMessage/MyMessage'
import OtherMembersMessage from './OtherMembersMessage/OtherMembersMessage'
import { useSelector } from 'react-redux'
import { socket } from '../../../AppPage'


export const ChatDisplay = ({showCurrentChat, setCurrentChat, isNewMessageCreated}) => {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const [chatMessagesHistory, setChatMessagesHistory] = useState([...showCurrentChat.history])
    
    useEffect(()=>{
        socket.on('UpdateChatHistory', (newMessageJustReceived) => {
            console.log(showCurrentChat, '<<showCurrentChat from updatedchathistory')
            console.log(newMessageJustReceived, '<<newMessageJustReceived showCurrentChat from updatedchathistory')
            
            setChatMessagesHistory((chatMessagesHistory)=>setChatMessagesHistory([...chatMessagesHistory, newMessageJustReceived ]) )
            
        })


    },[isNewMessageCreated])

    
    return (
        <div className="d-flex flex-column h-100 messages-wrapper">
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
