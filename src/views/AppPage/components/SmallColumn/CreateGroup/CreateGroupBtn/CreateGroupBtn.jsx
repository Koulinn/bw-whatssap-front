import React from 'react'
import {MdCheck } from 'react-icons/md'
import { socket } from '../../../../AppPage'


function CreateGroupBtn({selectedUsersId, setAppDisplayState}) {
    //create onlcick with an emit and also change the appstate do return to the main state
    const createGroup =()=>{
        console.log('From create group I can access the selected users',selectedUsersId)
        socket.emit('createRoom', selectedUsersId)
        setAppDisplayState({
            showProfile: false,
            showCreateRoom: false,
            showDisplayLastChatsColumn: true,
            showCreateGroup: false
        })

        //const users = [user._id, selectedUsers]
    }


    return (
        <div className="d-flex justify-content-end create-group-wrapper mt-3">
            <div className="p-2 d-flex mr-3">
                <div className="d-flex justify-content-center align-items-center create-group-icon">
                    <MdCheck />
                </div>
                <div className="ml-2 mr-3" onClick={() => { createGroup() }}>
                    Create group
                </div>
            </div>
        </div>
    )
}

export default CreateGroupBtn
