import React from 'react'

function ReturnMain({icon, title, setAppDisplayState}) {
    return (
        <div className="d-flex align-items-end">
            <div className="d-flex mb-4 align-items-center" onClick={()=>setAppDisplayState({
                showProfile: false,
                showCreateRoom: false,
                showDisplayLastChatsColumn: true
            })}>
                <div className="mx-4">
                    {icon}
                </div>
                <div className="">
                    <h6 className="mb-0">{title}</h6>
                </div>
            </div>
        </div>
    )
}

export default ReturnMain
