import React from 'react'

function OtherMembersMessage() {
    return (
        <div className="w-50 otherMemberMessage ml-3  mt-3 p-3 position-relative">
            <div className="d-flex flex-column w-100">
                <div>
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <p className="mb-3 mt-2">Hello How are you doing? Whatsspa up?</p>
            </div>
            <span className="position-absolute myMessage-time">15:16 pm</span>

        </div>
    )
}

export default OtherMembersMessage
