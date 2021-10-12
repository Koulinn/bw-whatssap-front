import React from 'react'
import {useState} from 'react'

function UserCard({bio, name}) {
    const [isSelected, setIsSelected] = useState(false)
    // create function on Click send to list of chat participants

    return (
        <div className="d-flex pr-3">
           
                <div className="p-3 ">
                    <img className="avatar-chat-room" src="https://picsum.photos/200/300" height='48' width="48" alt="" />
                </div>
                <div className="d-flex align-items-center w-100 border-bottom">
                    <div className="d-flex pr-2 py-2 pl-0 w-100 justify-content-between">
                        <div className="d-flex flex-column">
                            <p className="mb-0">{name}</p>
                            <p className="mb-0 text-truncate text-secondary"><small>{bio}</small></p>
                        </div>
                    </div>
                </div>
            

        </div>
    )
}

export default UserCard
