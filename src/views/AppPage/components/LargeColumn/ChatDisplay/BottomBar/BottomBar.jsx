import React from 'react'
import InputMenu from './InputMenu/InputMenu'
import { socket } from '../../../../AppPage'
import axios from 'axios'
import { useSelector } from 'react-redux'



function BottomBar({showCurrentChat, setIsNewMessageCreated, isNewMessageCreated }) {
    const loggedUserId = useSelector(s => s.user.userData._id)


    const submitHandler = async(e)=>{
        e.preventDefault()
        const textMessage= e.target.textMessage.value
        try {
            const payload ={
                message: textMessage,
                userId: loggedUserId,
                roomId: showCurrentChat._id
            }
            socket.emit("newMessage", payload)
            setIsNewMessageCreated(!setIsNewMessageCreated)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="bottomBar-wrapper" className="form_input d-flex align-items-center bg-grey p-3 position-absolute" >
            <InputMenu/>
            <div className="bg-white w-100 d-flex align-items-center messageInput-wrapper">
                <form onSubmit={(e)=>submitHandler(e)}>
                    <label htmlFor='messageInput' className="ml-2">
                    </label>
                    <input name="textMessage" className="w-100" id="messageInput" type="text" placeholder='Type a message' onChange={(e) => console.log(e.target.value)} />
                </form>
            </div>
            <div className="">
                <div className="pl-3 icon-wrapper">
                    <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default BottomBar
