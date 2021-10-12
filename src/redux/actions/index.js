import axios from 'axios'
export const setUserAccessToken = (payload)=>({
    type: 'SET_USER_TOKEN',
    payload: payload
})

export const setUserToken = (email,password,setRedirect)=>{
    return async(dispatch,getState)=>{
      const baseUrl = 'http://localhost:3001/user/login'
      try {
          let response = await axios.post(baseUrl,{ email:email,password:password })
          if(response.status===200){  
                setRedirect(true)
                dispatch({
                  type: 'SET_USER_TOKEN',
                  payload: response.data
                })
                dispatch({
                  type: 'SET_LOGGED_IN',
                  payload: true,
                })     
          }else{
                dispatch({
                 type: 'SET_LOGGED_IN',
                 payload: false,
              })
          }
    } catch (error) {
                dispatch({
                 type: 'SET_LOGGED_IN',
                 payload: false,
          })
     } 
}}

export const registerUserToken = (name,email,password,setRedirect)=>{
    return async(dispatch,getState)=>{
      const baseUrl = 'http://localhost:3001/user/register'
      try {
          let response = await axios.post(baseUrl,{ name:name,email:email,password:password })
          if(response.status===200){  
                setRedirect(true)
                dispatch({
                    type: 'SET_USER_TOKEN',
                    payload: response.data
                })
                dispatch({
                  type: 'SET_LOGGED_IN',
                  payload: true,
                })     
           } else {
                dispatch({
                 type: 'SET_LOGGED_IN',
                 payload: false,
              })
          }
    } catch ( error ) {
               dispatch({
                type: 'SET_LOGGED_IN',
                payload: false,
          })
     } 
}}

export const cookiesUserToken = ()=>{
    return async(dispatch,getState)=>{
        
    }
}