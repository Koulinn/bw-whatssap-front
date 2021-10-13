import React from 'react'
import {MdCheck } from 'react-icons/md'

function CreateGroupBtn() {
    return (
        <div className="d-flex justify-content-end create-group-wrapper mt-3">
            <div className="p-2 d-flex mr-3">
                <div className="d-flex justify-content-center align-items-center create-group-icon">
                    <MdCheck />
                </div>
                <div className="ml-2 mr-3">
                    Create group
                </div>
            </div>
        </div>
    )
}

export default CreateGroupBtn
