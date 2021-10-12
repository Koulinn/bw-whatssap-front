import React from 'react'
import { connect } from 'react-redux'
import MyMessage from './MyMessage/MyMessage'

export const ChatDisplay = (props) => {
    return (
        <div className="d-flex flex-column">
            <MyMessage/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatDisplay)
