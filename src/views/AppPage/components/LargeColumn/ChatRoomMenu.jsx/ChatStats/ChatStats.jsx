import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

function ChatStats({showCurrentChat}) {
    const loggedUserId = useSelector(s=>s.user.userData._id)
    const chatMember = showCurrentChat.members.filter(member=> member._id !== loggedUserId)[0]
    return (
        <div className="ml-3 d-flex align-items-center">
            <img className="avatar-my-profile" width="40" src={chatMember.avatar} alt="" />
            <div className="ml-3 d-flex flex-column justify-content-center">
                <p className="mb-0">{chatMember.name}</p>
                {/* <span className="mb-0" style={{ lineHeight: "12px" }}><small >Room members list</small></span> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => state.user.userData



const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ChatStats)
