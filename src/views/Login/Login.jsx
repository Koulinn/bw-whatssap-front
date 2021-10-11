import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/InputDefault/InputDefault'

export const Login = (props) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    
    return (
        <div id="login">
            <HeaderLoginRegister />
            <Container className="bg-grey px-5" fluid>
                <Container>
                    <Row className="p-5  bg-white register_login_border_shadow_translate">
                        <div className="col-8">
                            <h2 className="mb-5">Login</h2>
                            <InputDefault inputID="email" setFunc={setUserEmail} placeholderText='Enter your email' label="E-mail"/>
                            <InputDefault inputID="password" setFunc={setUserPassword} placeholderText='Enter your password' label="Password"/>
    
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg" width="128" alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
