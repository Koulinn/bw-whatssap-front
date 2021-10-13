import React from 'react'

function OtherMembersMessage({ message }) {
    const { text, media } = message.content
    return (
        <div className="w-50 otherMemberMessage ml-3  mt-3 p-3 position-relative">
            <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column w-100">
                    {media ? <div>
                        <img src={media} alt="" />
                    </div> : ''}
                    {text ? <p className="mb-3 mt-2">{text}</p> : ''}
                </div>
            </div>
            <span className="position-absolute myMessage-time">{message.createdAt}</span>

        </div>
    )
}

export default OtherMembersMessage
