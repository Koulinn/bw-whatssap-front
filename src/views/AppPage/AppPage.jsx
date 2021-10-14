import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { Container, Row } from 'react-bootstrap'
import { DisplayLastChatsColumn } from './components/SmallColumn/DisplayLastChatsColumn'
import { io } from 'socket.io-client'
import axios from 'axios'
import { EmptyState } from './components/LargeColumn/EmptyState/EmptyState'
import { ChatRoomMenu } from './components/LargeColumn/ChatRoomMenu.jsx/ChatRoomMenu'
import { ChatDisplay } from './components/LargeColumn/ChatDisplay/ChatDisplay'
import ChatBg from '../../assets/imgs/whatssapBG.png'
import BottomBar from './components/LargeColumn/ChatDisplay/BottomBar/BottomBar'
import { CreateRoom } from './components/SmallColumn/CreateRoom/CreateRoom'
import { Profile } from './components/SmallColumn/Profile/Profile'
import { setUserData } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNewRoom, setToggleRequest, setUserAllRooms, updateCurrentRoomMessage } from '../../redux/actions/chat-actions'



const ADDRESS = process.env.REACT_APP_SOCKET_URL
export const socket = io(ADDRESS, { transports: ['websocket'] })

const AppPage = ({ setUserData, setUserAllRooms, ...props }) => {
    const isUserLogged = useSelector(s => s.user.isLogged)
    const toggleRequest = useSelector(s => s.chat.toggleRequest)
    const history = useHistory()

    if (isUserLogged) {


    } else {

        history.push("/login");
    }
    const dispatch = useDispatch()

    const loggedUserId = useSelector(s => s.user.userData._id)
    const [appDisplayState, setAppDisplayState] = useState({
        showProfile: false,
        showCreateRoom: false,
        showDisplayLastChatsColumn: true
    })
    const [showChatComponent, setShowChatComponent] = useState(false)

    const [chatHistoryList, setChatHistoryList] = useState([])
    const [isNewMessageCreated, setIsNewMessageCreated] = useState(false)

    // window.onbeforeunload=()=>{
    //     // socket.emit('disconnect')
    // }
    useEffect(() => {
        if (!isUserLogged){

            
        } else {

            fetchMe()
            getLoggedUserChatHistory()
            console.log('inside useEffect')
            socket.on('connect', () => {
                console.log('Socket Connection established!')    
            })
            socket.emit('joinPreExistingRooms', loggedUserId)
        }


        // socket.on('roomCreated', (payload) => {

        //     dispatch(setNewRoom(payload))
        //     // setChatHistoryList((chatHistoryList) => [...chatHistoryList, payload])
        //     // console.log(payload, 'FOR NEW ROOMS')
        //     socket.emit('joinRooms',loggedUserId )
        // })
        // console.log(socket, '<<<socket')

        // socket.on('UpdateChatHistory', newlyReceivedMessage =>{
        //     console.log('Inside updateChatHistory event', newlyReceivedMessage)
        //     dispatch(updateCurrentRoomMessage(newlyReceivedMessage))})
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

        // socket.on('UpdateChatHistory', (newMessageJustReceived) => {
        //     console.log(newMessageJustReceived, '<<NEW message received')
        //     console.log(showCurrentChat, '<<showCurrentChat from updatedchathistory')

        //     // setCurrentChat((showCurrentChat) => {
        //     //     return ({
        //     //         ...showCurrentChat,
        //     //         showCurrentChat.history: [...showCurrentChat.history, newMessageJustReceived]
        //     //     })
        //     // })
        // })


    }, [])

   




    const fetchMe = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}user/me`, { withCredentials: true })
            if (response.statusText === 'OK') {
                setUserData(response.data)
            } else {

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
                setUserAllRooms(response.data)
            } else {

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

                            {appDisplayState.showDisplayLastChatsColumn ? <DisplayLastChatsColumn chatHistoryList={chatHistoryList} appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} setShowChatComponent={setShowChatComponent} /> : ''}
                            {appDisplayState.showCreateRoom ? <CreateRoom appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} /> : ''}
                            {appDisplayState.showProfile ? <Profile appDisplayState={appDisplayState} setAppDisplayState={setAppDisplayState} /> : ''}




                        </div>

                        {showChatComponent ?
                            <div id="chatDisplay" className="col-8 overflow-hidden px-0 h-100 position-relative" style={{ backgroundImage: `url(${ChatBg})` }}>
                                <ChatRoomMenu />
                                <ChatDisplay />
                                <BottomBar isNewMessageCreated={isNewMessageCreated} setIsNewMessageCreated={setIsNewMessageCreated} />
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

const mapToProps = s => ({

})

const mapDispatchToProps = (dispatch) => ({
    setUserData: (payload) => dispatch(setUserData(payload)),
    setUserAllRooms: (payload) => dispatch(setUserAllRooms(payload))

})

export default connect(mapToProps, mapDispatchToProps)(AppPage)
