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
import { registerUserToken } from '../../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Register = (props) => {
    const [register, setRegister] = useState({name:'',password:'',email:''})
    const [redirect, setRedirect] = useState(false)
    const name = register.name
    const password = register.password
    const email = register.email
    const state = useSelector(state => state)
    const dispatch = useDispatch()


    const handleInput = (key,value)=>{
        setRegister(
           { ...register,
          [key]:value}
          )
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
                            <Button variant="success" onClick={()=>dispatch(registerUserToken(name,email,password,setRedirect))}>Create an account</Button>
                        </div>
    
                        <Divisor/>
                        <div className="col-8 d-flex justify-content-center">
                            <GoogleButton className="googleBtn" />
                        </div>
    
                        <div className="col-8 d-flex justify-content-center mt-5">
                            <p>Already have an account? <Link to='/login'><strong>Return to login</strong> </Link></p>
    
                        </div>
                    </div>
                    <SideImage/>

                </Row>
            </Container>
        </Container>
    </div>
    )
}

export default Register
