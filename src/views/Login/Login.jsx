import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/Login_Register_Shareable/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'
import Divisor from '../../components/Login_Register_Shareable/Divisor/Divisor'

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
                            <InputDefault inputID="email" setFunc={setUserEmail} placeholderText='Enter your email' label="E-mail" />
                            <InputDefault inputID="password" setFunc={setUserPassword} placeholderText='Enter your password' label="Password" />
                            <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                                <Button variant="success">Login</Button>
                            </div>

                            <Divisor/>
                            <div className="col-8 d-flex justify-content-center">
                                <GoogleButton className="googleBtn" />
                            </div>

                            <div className="col-8 d-flex justify-content-center mt-5">
                                <p>First time? <strong>Create an account</strong> </p>

                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg"  width="196" alt="" />
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
