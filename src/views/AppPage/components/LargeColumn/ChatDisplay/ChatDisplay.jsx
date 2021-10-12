import React from 'react'
import { connect } from 'react-redux'
import MyMessage from './MyMessage/MyMessage'
import OtherMembersMessage from './OtherMembersMessage/OtherMembersMessage'

export const ChatDisplay = (props) => {
    return (
        <div className="d-flex flex-column h-100 messages-wrapper">
            <MyMessage/>
            <OtherMembersMessage/>
            <MyMessage/>
            <OtherMembersMessage/>
            <MyMessage/>
            <OtherMembersMessage/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay)
