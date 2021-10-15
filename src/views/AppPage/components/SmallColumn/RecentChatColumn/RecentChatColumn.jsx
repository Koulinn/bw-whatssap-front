import React from 'react'
import { connect } from 'react-redux'
import { ChatRoom } from './Components/ChatRoom/ChatRoom'
import { useSelector } from 'react-redux'

export const RecentChatColumn = ({setAppDisplayState, setShowChatComponent, setSetCurrentDisplayedChatID}) => {
    const allChatsRooms = useSelector(s=>s.chat.allChatsRooms)
    
    return (
        <div id="recentChats" className="flex-grow-1 overflow-auto">
            <div className=" h-100">
                <div className="chatRoom-wrapper">
                    {allChatsRooms.length > 0 ? allChatsRooms.map(chat=> <ChatRoom key={chat._id} setSetCurrentDisplayedChatID={setSetCurrentDisplayedChatID} chat={chat} setAppDisplayState={setAppDisplayState} setShowChatComponent={setShowChatComponent} />): 'Talk with someone!'}
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (s) => s.chat

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentChatColumn)
