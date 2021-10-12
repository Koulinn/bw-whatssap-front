import React from 'react'
import {MdOutlinePhotoCamera, MdOutlineImage, MdOutlineAccountCircle, MdOutlineInsertDriveFile} from 'react-icons/md'


function AttachmentMenu() {
    return (
        <div id='attachmentMenu' className=" d-flex flex-column position-absolute bg-transparent">
            <div className="icon-wrapper mt-3">
                <MdOutlinePhotoCamera />
            </div>
            <div className="icon-wrapper my-3">
                <MdOutlineImage />
            </div>
            <div className="icon-wrapper mb-3">
                <MdOutlineAccountCircle />
            </div>
            <div className="icon-wrapper mb-3">

                <MdOutlineInsertDriveFile />
            </div>
        </div>
    )
}

export default AttachmentMenu
