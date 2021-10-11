import React from 'react'
import { connect } from 'react-redux'
import { ChatRoom } from './Components/ChatRoom/ChatRoom'

export const RecentChatColumn = (props) => {
    return (
        <div id="recentChats" className="flex-grow-1 overflow-auto">
            <div className=" h-100">
                <div className="chatRoom-wrapper">
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                    <ChatRoom/>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentChatColumn)
