import React from 'react'
import {format} from 'date-fns'

function MyMessage({message}) {
    const {text, media,createdAt} = message.content
    const convertedTime = createdAt ? format(createdAt, 'H:mm'): 'now'
    return (
        <div className="w-50 message mr-3  mt-3 p-3 align-self-end position-relative">
            <div className="d-flex flex-column w-100">
                   {media?   <div><img src={media} alt="" />  </div> :''}
                {text ? <p className="mb-3 mt-2">{text}</p> : ''}
            </div>
            <span className="position-absolute myMessage-time">{convertedTime}</span>
            
        </div>
    )
}

export default MyMessage
