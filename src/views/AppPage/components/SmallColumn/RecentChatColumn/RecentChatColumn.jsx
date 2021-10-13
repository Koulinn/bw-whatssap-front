import React from 'react'
import { connect } from 'react-redux'
import { ChatRoom } from './Components/ChatRoom/ChatRoom'

export const RecentChatColumn = ({chatHistoryList, setCurrentChat}) => {
    console.log(chatHistoryList, 'From RecentChat column component')
    return (
        <div id="recentChats" className="flex-grow-1 overflow-auto">
            <div className=" h-100">
                <div className="chatRoom-wrapper">
                    {chatHistoryList.length > 0 ? chatHistoryList.map(chat=> <ChatRoom key={chat._id} chat={chat} setCurrentChat={setCurrentChat} />): 'Talk with someone!'}
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
