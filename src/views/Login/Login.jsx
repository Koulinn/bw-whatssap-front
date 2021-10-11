import React from 'react'
import { connect } from 'react-redux'
import Header_Login_Register from '../../components/Header_login_register/Header_Login_Register'

export const Login = (props) => {
    return (
        <div>
            <Header_Login_Register/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
