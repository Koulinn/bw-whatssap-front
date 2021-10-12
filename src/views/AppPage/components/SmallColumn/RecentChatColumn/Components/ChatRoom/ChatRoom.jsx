import React from 'react'
import { connect } from 'react-redux'

export const ChatRoom = (props) => {
    return (
        <div className="d-flex pr-3">
            <div className="p-3 ">
                <img className="avatar-my-profile" src="https://picsum.photos/200/300" height='48' width="48" alt="" />
            </div>
            <div className="d-flex align-items-center border-bottom">
                <div className="d-flex p-2 w-100 justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="mb-0 max-text-size-190">User Name</p>
                        <p className="mb-0 text-truncate text-secondary max-text-size-190"><small>Last mesadasdasdasd asdsadasdasdsadasdasdasdasdsadasssage text</small></p>
                    </div>
                    <div className="d-flex flex-column">
                        <small>yesterday</small>
    
                    </div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
