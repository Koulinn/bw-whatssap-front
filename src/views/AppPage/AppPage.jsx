import React from 'react'
import { connect } from 'react-redux'
import UseGetUserData from '../../lib old/UseGetUserData'
import requests from '../../lib old/request-handler'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { Container, Row } from 'react-bootstrap'
import { DisplayLastChatsColumn } from './components/SmallColumn/DisplayLastChatsColumn'
import { SearchBar } from './components/SmallColumn/User/SearchBar'
import { Notification } from './components/SmallColumn/User/Notification'


export const AppPage = (props) => {
    // const data = UseGetUserData()
    const test = requests.login()

    return (
        <div>
            <HeaderLoginRegister hideLogo={true} />
            <Container className=" px-0 bg-white register_login_border_shadow_translate">
                <Row className="px-0">
                    <div className="col-4">
                        <DisplayLastChatsColumn/>
                        <Notification/>
                        <SearchBar/>

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
