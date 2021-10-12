import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import UseGetUserData from '../../lib old/UseGetUserData'
import requests from '../../lib old/request-handler'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { Container, Row } from 'react-bootstrap'
import { DisplayLastChatsColumn } from './components/SmallColumn/DisplayLastChatsColumn'
import { io } from 'socket.io-client'
import axios from 'axios'

const ADDRESS = 'http://localhost:3001'
const socket = io(ADDRESS, { transports: ['websocket'] })

export const AppPage = (props) => {
    // const data = UseGetUserData()
    //const test = requests.login()
    const [loggedIn, setLoggedIn] = useState(false)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([])

    useEffect(() => {
        fatchme()
        // we're now going to set up some event listeners, just once
        // for the entire lifetime of this chat application
    
        // the first one will be for acknowledging the successfull connection with the backend
        socket.on('connect', () => {
          // with on we're listening for an event
          console.log('Connection established!')
          console.log(socket.id)
          // now you can send the username for loggin in!
        })

        //create new room
        let users=["61644ebc5e91ee64d1dc84d0","61657ca76ec620b30da351fc"]
        socket.emit('createRoom', users)
        socket.on('roomCreated',(payload)=>{
            console.log('roomCreated',payload)
        })

        //add new message to a room
        let newMessage={
            message:"Hello world",
            userId:"61657ca76ec620b30da351fc",
            roomId:"61659a3c3e807fd0dd79bdd8"
        }
        socket.emit('newMessage',newMessage)
        socket.on('UpdateChatHistory',(payload)=>{
            console.log('UpdateChatHistory',payload)
            setMessage(payload)
        })

        //delete a message from room
        let deleteMessage={
            roomId:"61659a3c3e807fd0dd79bdd8",
            messageId:"6165a163c9353dbe3ec3b4df"
        }
        socket.emit('deleteMessage',deleteMessage)

        socket.on('message', (newMessageJustReceived) => {
          //   console.log("message received! let's post it in the window...")
          //   console.log(newMessageJustReceived)
          // this is happening on ALL clients apart from the one who sent the message!
    
          console.log('OLD CHATHISTORY', chatHistory)
    
          // BROKEN! the value of chatHistory is just taken initialle and never re-evaluated!
          //   let newChatHistory = chatHistory.concat(newMessageJustReceived)
          //   setChatHistory(newChatHistory)
    
          // instead with this callback we're getting the most up-to-date value of chatHistory
          // from the hook callback (it's re-evaluated every time!)
          setChatHistory((chatHistory) => {
            console.log(chatHistory)
            return [...chatHistory, newMessageJustReceived]
          })
        })
      }, [])

      const fatchme = async () => {
        try {
        const response=await axios.get('http://localhost:3001/user/me',{withCredentials: true})
        console.log('me request',response.data)
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div>
            <HeaderLoginRegister hideLogo={true} />
            <Container className=" px-0 bg-white register_login_border_shadow_translate">
                <Row className="px-0">
                    <div className="col-4">
                        <DisplayLastChatsColumn/>

                    </div>
                    <div className="col-8">
                        <h3>Chat space</h3>
                    </div>

                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppPage)
