import React from 'react'
import { connect } from 'react-redux'

function ChatStats() {
    return (
        <div className="ml-3 d-flex align-items-center">
            <img className="avatar-my-profile" width="40" src="https://miro.medium.com/max/790/1*reXbWdk_3cew69RuAUbVzg.png" alt="" />
            <div className="ml-3 d-flex flex-column justify-content-center">
                <p className="mb-0">Room name or Contact Name</p>
                <span className="mb-0" style={{ lineHeight: "12px" }}><small >Room members list</small></span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ChatStats)
