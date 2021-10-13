import React from 'react'
import { connect } from 'react-redux'
import { RecentChatColumn } from './RecentChatColumn/RecentChatColumn'
import { Notification } from './User/Notification'
import { SearchBar } from './User/SearchBar'
import UserMenu from './User/UserMenu'


export const DisplayLastChatsColumn = ({setAppDisplayState}) => {
    return (
        <div className="d-flex flex-column h-100">
            <UserMenu setAppDisplayState={setAppDisplayState} setAppDisplayState={setAppDisplayState}/>
            <Notification />
            <SearchBar />
            <RecentChatColumn/>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayLastChatsColumn)
