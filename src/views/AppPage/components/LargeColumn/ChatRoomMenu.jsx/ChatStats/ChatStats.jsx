import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function ChatStats() {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMembers = useSelector(s=>s.chat.roomDisplayed.members)
    const chatReceiver = chatMembers.filter(member=> member._id !== loggedUserId)[0]
    return (
        <div className="ml-3 d-flex align-items-center">
            <img className="avatar-my-profile" width="40" src={chatReceiver.avatar} alt="" />
            <div className="ml-3 d-flex flex-column justify-content-center">
                <p className="mb-0">{chatReceiver.name}</p>
                {/* <span className="mb-0" style={{ lineHeight: "12px" }}><small >Room members list</small></span> */}
            </div>
        </div>
    )
}






export default ChatStats
