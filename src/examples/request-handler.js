import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { setUserToken } from '../redux/actions';
import tools from './tools.js'

const login = async (bode) => {
    try {
        
        const body = {
            email: "testddsst@tes.com",
            password: "123"
        }
        const serverResponse = await axios.post(process.env.REACT_APP_PROD_API_URL + 'users/login', { body })
        if(serverResponse.status === 200){
            tools.setUserTokens(serverResponse.data)

        } else {
            console.log('else')
        }
    } catch (error) {
        console.log(error)
    }

}

const requests = {
    login: login
}

export default requests