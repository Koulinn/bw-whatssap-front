import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/Login_Register_Shareable/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'
import Divisor from '../../components/Login_Register_Shareable/Divisor/Divisor'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const Login = (props) => {
    const [login, setLogin] = useState({email:'',password:''})
    const [redirect, setreDirect] = useState(false)

    const handleInput = (key,value)=>{
        setLogin(
           { ...login,
          [key]:value}
          )
}
    const userLogin = async () => {
        try {
            const serverResponse = await axios.post(`http://localhost:3001/user/login`, { email:login.email,password:login.password })
            if(serverResponse.status === 200){
                console.log(serverResponse.data)
                setreDirect(true)
            } else {
                console.log('else')
            }
        } catch (error) {
            console.log(error)
        }
    
    }
    if(redirect){
        return <Redirect to='/'/>
    }

    return (
        <div id="login">
            <HeaderLoginRegister />
            <Container className="bg-grey px-5" fluid>
                <Container>
                    <Row className="p-5  bg-white register_login_border_shadow_translate">
                        <div className="col-8">
                            <h2 className="mb-5">Login</h2>
                            <InputDefault inputID='email' login={login} value={login.email}  handleInput={handleInput} placeholderText='Enter your email' label="E-mail" />
                            <InputDefault inputID='password' login={login} value={login.password}   handleInput={handleInput}  placeholderText='Enter your password' label="Password" />
                            <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                                <Button variant="success" onClick={userLogin}>Login</Button>
                            </div>

                            <Divisor/>
                            <div className="col-8 d-flex justify-content-center">
                              <a href="http://localhost:3001/user/googleLogin"> <GoogleButton className="googleBtn" /></a>
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
