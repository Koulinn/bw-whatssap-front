import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { Container, Row } from 'react-bootstrap'
import { DisplayLastChatsColumn } from './components/SmallColumn/DisplayLastChatsColumn'
import { io } from 'socket.io-client'
import axios from 'axios'
import { SearchBar } from './components/SmallColumn/User/SearchBar'
import { Notification } from './components/SmallColumn/User/Notification'
import { EmptyState } from './components/LargeColumn/EmptyState/EmptyState'
import { ChatRoomMenu } from './components/LargeColumn/ChatRoomMenu.jsx/ChatRoomMenu'
import { ChatDisplay } from './components/LargeColumn/ChatDisplay/ChatDisplay'
import ChatBg from '../../assets/imgs/whatssapBG.png'
import BottomBar from './components/LargeColumn/ChatDisplay/BottomBar/BottomBar'
import { CreateRoom } from './components/SmallColumn/CreateRoom/CreateRoom'
import { Profile } from './components/SmallColumn/Profile/Profile'
import { setUserData } from '../../redux/actions'


const ADDRESS = process.env.REACT_APP_SOCKET_URL
export const socket = io(ADDRESS, { transports: ['websocket'] })

const AppPage = ({ setUserData }) => {
    const [appDisplayState, setAppDisplayState] = useState({
        showProfile: false,
        showCreateRoom: false,
        showDisplayLastChatsColumn: true
    })
    const [showCreateRoom, setShowCreateRoom] = useState(false)
    const [chatHistoryList, setChatHistoryList] = useState([])
    const [showCurrentChat, setCurrentChat] = useState(null)

    useEffect(() => {
        fetchMe()
        getLoggedUserChatHistory()

        socket.on('connect', () => {
            console.log('Socket Connection established!')
        })

        socket.on('roomCreated', (payload) => {
            setChatHistoryList((chatHistoryList) => [...chatHistoryList, payload])
        })

        // //add new message to a room
        // let newMessage = {
        //     message: "Hello world",
        //     userId: "61657ca76ec620b30da351fc",
        //     roomId: "61659a3c3e807fd0dd79bdd8"
        // }
        // // socket.emit('newMessage',newMessage)
        // socket.on('UpdateChatHistory', (payload) => {
        //     // console.log('UpdateChatHistory', payload)
        //     setMessage(payload)
        // })

        //delete a message from room
        // let deleteMessage = {
        //     roomId: "61659a3c3e807fd0dd79bdd8",
        //     messageId: "6165a163c9353dbe3ec3b4df"
        // }
        // socket.emit('deleteMessage',deleteMessage)

        // socket.on('message', (newMessageJustReceived) => {
        //     //   console.log("message received! let's post it in the window...")
        //     //   console.log(newMessageJustReceived)
        //     // this is happening on ALL clients apart from the one who sent the message!

        //     console.log('OLD CHATHISTORY', chatHistory)

        //     // BROKEN! the value of chatHistory is just taken initialle and never re-evaluated!
        //     //   let newChatHistory = chatHistory.concat(newMessageJustReceived)
        //     //   setChatHistory(newChatHistory)

        //     // instead with this callback we're getting the most up-to-date value of chatHistory
        //     // from the hook callback (it's re-evaluated every time!)
        //     setChatHistory((chatHistory) => {
        //         // console.log(chatHistory)
        //         return [...chatHistory, newMessageJustReceived]
        //     })
        // })
    }, [])

    
    const fetchMe = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}user/me`, { withCredentials: true })
            if (response.statusText === 'OK') {
                setUserData(response.data)
            } else {
                console.log('fetche me else')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getLoggedUserChatHistory = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}chat/chatByUser`, { withCredentials: true })
            if (response.statusText === 'OK') {
                setChatHistoryList(response.data)
            } else {
                console.log('fetche me else')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container-fluid">
            <Container>
                <HeaderLoginRegister hideLogo={true} />
                <Container className=" px-0 bg-white register_login_border_shadow_position position-absolute">
                    <Row className="px-0 mx-0 w-100 h-100">
                        <div className="col-4 px-0 h-100">

                            {appDisplayState.showDisplayLastChatsColumn ? <DisplayLastChatsColumn chatHistoryList={chatHistoryList} appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} setCurrentChat={setCurrentChat}/> : ''}
                            {appDisplayState.showCreateRoom ? <CreateRoom appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} /> : ''}
                            {appDisplayState.showProfile ? <Profile appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} /> : ''}




                        </div>

                        {showCurrentChat ?
                            <div id="chatDisplay" className="col-8 overflow-hidden px-0 h-100 position-relative" style={{ backgroundImage: `url(${ChatBg})` }}>
                                <ChatRoomMenu showCurrentChat={showCurrentChat}  />
                                <ChatDisplay showCurrentChat={showCurrentChat} />
                                <BottomBar showCurrentChat={showCurrentChat} />
                            </div>
                            : <div className="col-8 px-0 h-100" style={{ backgroundColor: '#f8f9fa' }}>
                                <EmptyState />
                            </div>}


                    </Row>
                </Container>
            </Container>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    setUserData: (payload) => dispatch(setUserData(payload))

})

export default connect(mapDispatchToProps)(AppPage)
