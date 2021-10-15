import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { useState, useEffect } from 'react'
import InputDefault from '../../components/Login_Register_Shareable/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'
import SideImage from '../../components/Login_Register_Shareable/SideImage/SideImage'
import Divisor from '../../components/Login_Register_Shareable/Divisor/Divisor'
import { registerUser } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


export const Register = (props) => {
    const [register, setRegister] = useState({ name: '', password: '', email: '' })
    const isLogged = useSelector(state => state.user.isLogged)
    const history = useHistory()
    const name = register.name
    const password = register.password
    const email = register.email
    const dispatch = useDispatch()


    const handleInput = (key, value) => {
        setRegister(
            {
                ...register,
                [key]: value
            }
        )
    }

    if(isLogged){
        history.push('/')
    }

    return (
        <div id="register">
            <HeaderLoginRegister />
            <Container className="bg-grey px-5" fluid>
                <Container>
                    <Row className="p-5  bg-white register_login_border_shadow_translate">
                        <div className="col-8">
                            <h2 className="mb-5">Register</h2>

                            <InputDefault inputID="name" value={register.name} handleInput={handleInput} type="text" placeholderText='Enter your name' label="Name" />
                            <InputDefault inputID="email" value={register.email} handleInput={handleInput} type="text" placeholderText='Enter your email' label="E-mail" />
                            <InputDefault inputID="password" value={register.password} handleInput={handleInput} type="password" placeholderText='Enter your password' label="Password" />

                            <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                                <Button variant="success" onClick={() => dispatch(registerUser({name, email, password}))}>Create an account</Button>
                            </div>

                            <Divisor />
                            <div className="col-8 d-flex justify-content-center">
                                <a href={`${process.env.REACT_APP_PROD_API_URL}user/googleLogin`}> <GoogleButton className="googleBtn" /></a>
                            </div>

                            <div className="col-8 d-flex justify-content-center mt-5">
                                <p>Already have an account? <Link to='/login'><strong>Return to login</strong> </Link></p>

                            </div>
                        </div>
                        <SideImage />

                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Register
