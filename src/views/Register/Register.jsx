import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'


export const Register = (props) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userName, setUserName] = useState('')
    return (
        <div id="register">
        <HeaderLoginRegister />
        <Container className="bg-grey px-5" fluid>
            <Container>
                <Row className="p-5  bg-white register_login_border_shadow_translate">
                    <div className="col-8">
                        <h2 className="mb-5">Register</h2>
                        <InputDefault inputID="email" setFunc={setUserEmail} placeholderText='Enter your email' label="E-mail" />
                        <InputDefault inputID="password" setFunc={setUserPassword} placeholderText='Enter your password' label="Password" />
                        <InputDefault inputID="name" setFunc={setUserName} placeholderText='Enter your name' label="Name" />
                        <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                            <Button variant="success">Create an account</Button>
                        </div>
    
                        <div className="col-8 d-flex align-items-center my-5">
                            <hr className="mr-0" />
                            <span className="px-3 d-flex align-items-center translate_-2px">or</span>
                            <hr className="ml-0" />
                        </div>
                        <div className="col-8 d-flex justify-content-center">
                            <GoogleButton className="googleBtn" />
                        </div>
    
                        <div className="col-8 d-flex justify-content-center mt-5">
                            <p>Already have an account? <strong>Return to login</strong> </p>
    
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src="https://static.whatsapp.net/rsrc.php/yz/r/lOol7j-zq4u.svg" width="196" alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)
