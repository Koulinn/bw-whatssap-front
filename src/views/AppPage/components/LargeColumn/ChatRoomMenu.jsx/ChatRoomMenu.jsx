import React from 'react'
import { connect } from 'react-redux'
import { AiOutlineSearch } from 'react-icons/ai'
import ChatStats from './ChatStats/ChatStats'

export const ChatRoomMenu = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center py-3 bg-grey chatMenu-wrapper">
            <ChatStats/>
            <div className="d-flex justify-content-between align-items-center">
                <div className="icon-wrapper mx-2 p-2">
                    <AiOutlineSearch />
                </div>
                <div className="icon-wrapper p-2 mr-2">
                    <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomMenu)
