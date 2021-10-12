import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/Login_Register_Shareable/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'
import SideImage from '../../components/Login_Register_Shareable/SideImage/SideImage'
import Divisor from '../../components/Login_Register_Shareable/Divisor/Divisor'
import { Redirect } from 'react-router'
import axios from 'axios'

export const Register = (props) => {
    const [register, setRegister] = useState({name:'',password:'',email:''})
    const [redirect, setRedirect] = useState(false)

    const handleInput = (key,value)=>{
        setRegister(
           { ...register,
          [key]:value}
          )
}
const userRegister = async () => {
    try {
        const serverResponse = await axios.post(`http://localhost:3001/user/register`, { name:register.name,password:register.password,email:register.email })
        if(serverResponse.status === 200){
            console.log(serverResponse.data)
            setRedirect(true)
        } else {
            console.log('else')
        }
    } catch (error) {
        console.log(error)
    }
}

if(redirect){
    return <Redirect to='/login'/>
}
    return (
        <div id="register">
        <HeaderLoginRegister />
        <Container className="bg-grey px-5" fluid>
            <Container>
                <Row className="p-5  bg-white register_login_border_shadow_translate">
                    <div className="col-8">
                        <h2 className="mb-5">Register</h2>

                        <InputDefault inputID="name" value={register.name}  handleInput={handleInput} placeholderText='Enter your name' label="Name" />
                        <InputDefault inputID="password" value={register.password}  handleInput={handleInput}  placeholderText='Enter your password' label="Password" />
                        <InputDefault inputID="email" value={register.email}  handleInput={handleInput} placeholderText='Enter your email' label="E-mail" />
                        
                        <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                            <Button variant="success" onClick={userRegister}>Create an account</Button>
                        </div>
    
                        <Divisor/>
                        <div className="col-8 d-flex justify-content-center">
                            <GoogleButton className="googleBtn" />
                        </div>
    
                        <div className="col-8 d-flex justify-content-center mt-5">
                            <p>Already have an account? <strong>Return to login</strong> </p>
    
                        </div>
                    </div>
                    <SideImage/>

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
