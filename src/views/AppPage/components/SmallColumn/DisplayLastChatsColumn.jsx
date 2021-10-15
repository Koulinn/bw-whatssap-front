import React from 'react'
import { connect } from 'react-redux'
import { RecentChatColumn } from './RecentChatColumn/RecentChatColumn'
import { Notification } from './User/Notification'
import { SearchBar } from './User/SearchBar'
import UserMenu from './User/UserMenu'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleRequest, setNewRoom } from '../../../../redux/actions/chat-actions'
import {socket} from '../../../AppPage/AppPage'

export const DisplayLastChatsColumn = ({setAppDisplayState, chatHistoryList, setCurrentChat, setShowChatComponent, setSetCurrentDisplayedChatID, ...props}) => {
    const toggleRequest = useSelector(s => s.chat.toggleRequest)
    const dispatch= useDispatch()

   
    return (
        <div className="d-flex flex-column h-100">
            <UserMenu  setAppDisplayState={setAppDisplayState}/>
            <Notification />
            <SearchBar />
            <RecentChatColumn setSetCurrentDisplayedChatID={setSetCurrentDisplayedChatID}  chatHistoryList={chatHistoryList} setCurrentChat={setCurrentChat} setAppDisplayState={setAppDisplayState} setShowChatComponent={setShowChatComponent}/>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayLastChatsColumn)
