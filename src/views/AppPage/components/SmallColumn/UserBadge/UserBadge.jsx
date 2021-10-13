import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

function UserBadge({name}) {
    return (
        <div className="d-flex align-items-center userBadge px-3 py-1">
                        <div className="icon-wrapper d-flex justify-content-center align-items-center">
                            <MdOutlineClose />
                        </div>
                        <div className="ml-2">
                            <small>{name}</small>
                        </div>
                    </div>
    )
}

export default UserBadge
