import React from 'react'
import { connect } from 'react-redux'
import UseGetUserData from '../../lib old/UseGetUserData'
import requests from '../../lib old/request-handler'

export const Home = (props) => {
    // const data = UseGetUserData()
    const test = requests.login()

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
