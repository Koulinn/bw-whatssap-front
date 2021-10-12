import React from 'react'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { Container, Row } from 'react-bootstrap'
import { DisplayLastChatsColumn } from './components/SmallColumn/DisplayLastChatsColumn'
import { SearchBar } from './components/SmallColumn/User/SearchBar'
import { Notification } from './components/SmallColumn/User/Notification'
import { EmptyState } from './components/LargeColumn/EmptyState/EmptyState'
import { ChatRoomMenu } from './components/LargeColumn/ChatRoomMenu.jsx/ChatRoomMenu'
import { ChatDisplay } from './components/LargeColumn/ChatDisplay/ChatDisplay'
import ChatBg from '../../assets/imgs/whatssapBG.png'
import BottomBar from './components/LargeColumn/ChatDisplay/BottomBar/BottomBar'



export const AppPage = (props) => {
    return (
        <div className="container-fluid">
            <Container>
                <HeaderLoginRegister hideLogo={true} />
                <Container className=" px-0 bg-white register_login_border_shadow_position position-absolute">
                    <Row className="px-0 mx-0 w-100 h-100">
                        <div className="col-4 px-0 h-100">
                            <DisplayLastChatsColumn/>
                           
    
                        </div>
                        <div id="chatDisplay" className="col-8 overflow-hidden px-0 h-100 position-relative" style={{backgroundImage: `url(${ChatBg})`}}>
                        {/* <div className="col-8 px-0 h-100" style={{backgroundColor:'#f8f9fa'}}> */}
                            {/* <EmptyState/> */}
                            <ChatRoomMenu/>
                            <ChatDisplay/>
                            <BottomBar/>
                        </div>
    
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppPage)
