import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import HeaderLoginRegister from '../../components/Login_Register_Shareable/HeaderLoginRegister/HeaderLoginRegister'
import { useState } from 'react'
import InputDefault from '../../components/Login_Register_Shareable/InputDefault/InputDefault'
import GoogleButton from 'react-google-button'
import Divisor from '../../components/Login_Register_Shareable/Divisor/Divisor'
import { Link } from 'react-router-dom'
import { setUserLogin } from '../../redux/actions'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export const Login = () => {
    const [login, setLogin] = useState({email:'',password:''})
    const history = useHistory()
    const isLogged = useSelector(state => state.user.isLogged)
    const dispatch = useDispatch()


    const email = login.email
    const password = login.password


    const handleInput = (key,value)=>{
        setLogin(
           { ...login,
          [key]:value}
          )}

    if(isLogged){
        history.push('/')
    }

   

    return (
        <div id="login">
            <HeaderLoginRegister />
            <Container className="bg-grey px-5" fluid>
                <Container>
                    <Row className="p-5  bg-white register_login_border_shadow_translate">
                        <div className="col-8">
                            <h2 className="mb-5">Login</h2>
                            <InputDefault inputID='email' login={login} value={login.email} type="text" handleInput={handleInput} placeholderText='Enter your email' label="E-mail" />
                            <InputDefault inputID='password' login={login} value={login.password} type="text"   handleInput={handleInput}  placeholderText='Enter your password' label="Password" />
                            <div className="col-8 d-flex pl-3 pt-5 mt-5 justify-content-center">
                                <Button variant="success" onClick={()=>dispatch(setUserLogin(email,password))}>Login</Button>
                            </div>

                            <Divisor/>
                            <div className="col-8 d-flex justify-content-center">
                              <a href={`${process.env.REACT_APP_PROD_API_URL}user/googleLogin`}> <GoogleButton className="googleBtn" /></a>
                            </div>

                            <div className="col-8 d-flex justify-content-center mt-5">
                                <p>First time? <Link to='/register'><strong>Create an account</strong></Link> </p>

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
export default Login
