import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import store from '../redux/store'
import tools from './tools.js'



// const { userData } = useSelector(s => s)

// console.log(userData, 'USER DATA from REQUEST handler line 8')

// axios.defaults.headers.common['Authorization'] = userData.accessToken;

// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU3MjRiOGNlMGIzOGE4NmRlNWU2ZDMiLCJpYXQiOjE2MzMyNjgyOTAsImV4cCI6MTYzMzI2ODMyMH0.DEng-_5Uz2gOQ0jmMd1bIPSE3Nh2UjUN8tljF6uNRKQ",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU3MjRiOGNlMGIzOGE4NmRlNWU2ZDMiLCJpYXQiOjE2MzMyNjgyOTAsImV4cCI6MTYzMzg3MzA5MH0.leus3qDsQfEMCHTFqt9D6Eqbx_OQmmLYJ565SinVeUg"
// }
const refreshAuthLogic = async (failedRequest) => {
    const storeState = store.getState()
    
    const body = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU3MjRiOGNlMGIzOGE4NmRlNWU2ZDMiLCJpYXQiOjE2MzMyNjgyOTAsImV4cCI6MTYzMzg3MzA5MH0.leus3qDsQfEMCHTFqt9D6Eqbx_OQmmLYJ565SinVeUg"
    const tokenRefreshResponse = await axios.post(process.env.REACT_APP_PROD_API_URL + 'users/refreshToken', { body })
    console.log(storeState, 'ToSTAhngbcvfdfghfdsgddfdsdgfhTE esh response')

    localStorage.setItem('token', tokenRefreshResponse.data.refreshToken);
    localStorage.setItem('accessToken', tokenRefreshResponse.data.accessToken);
    

    console.log(tokenRefreshResponse, 'Token refresh response')
    
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.accessToken;
    
    return Promise.resolve()
}


// Instantiate the interceptor
createAuthRefreshInterceptor(axios, refreshAuthLogic);

// Make a call. If it returns a 401 error, the refreshAuthLogic will be run, 
// and the request retried with the new token

const UseGetUserData = () => {
    // const [reponseState, setResponseState] = useState(null)
    const test = useSelector(s => s.user.userData)
    console.log(tools.isEmpty(test), 'testtttttttttttttttttttttt log', test)
    const wrapper = async ()=>{
        console.log(test, 'USER DATA from REQUEST handler line 39')
        console.log(store.getState(), 'ToSTATE esh response')
        
        axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU3MjRiOGNlMGIzOGE4NmRlNWU2ZDMiLCJpYXQiOjE2MzMyNjgyOTAsImV4cCI6MTYzMzI2ODMyMH0.DEng-_5Uz2gOQ0jmMd1bIPSE3Nh2UjUN8tljF6uNRKQ";
    
        const response = await axios.get(process.env.REACT_APP_PROD_API_URL + "users/me")
        console.log(response)
        return response
    }
    useEffect(()=> wrapper(),[])

    return 
}


export default UseGetUserData