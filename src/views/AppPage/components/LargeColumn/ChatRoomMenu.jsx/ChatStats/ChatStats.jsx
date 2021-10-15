import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function ChatStats() {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMembers = useSelector(s=>s.chat.roomDisplayed.members)
    const fullRoomData = useSelector(s=>s.chat.roomDisplayed)
    const chatReceiver = chatMembers.filter(member=> member._id !== loggedUserId)[0]
    const isGroup = chatMembers.length > 2? true :false
    const genericGroupImage= 'https://thumbs.dreamstime.com/z/line-users-group-icon-isolated-grey-background-people-business-avatar-symbol-profile-colorful-outline-concept-vector-194065612.jpg'

    const groupImage= fullRoomData.image? fullRoomData.image : genericGroupImage
    return (
        <div className="ml-3 d-flex align-items-center">
            <img className="avatar-my-profile" width="40" src={isGroup? groupImage :chatReceiver.avatar} alt="" />
            <div className="ml-3 d-flex flex-column justify-content-center">
                <p className="mb-0">{isGroup? 'Group Chat' : chatReceiver.name}</p>
                {isGroup ? <span className="mb-0" style={{ lineHeight: "12px" }}><small>{chatMembers.map(member=>`${member.name}, `)}</small></span> : ''}
            </div>
        </div>
    )
}






export default ChatStats
