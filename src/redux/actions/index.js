import axios from 'axios'

// export const setUserAccessToken = (payload)=>({
//     type: 'SET_USER_TOKEN',
//     payload: payload
// })


export const setUserLogin = (email,password,setRedirect)=>{

    return async(dispatch,getState)=>{
      const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/login`
      try {
          let response = await axios.post(baseUrl,{ email:email,password:password },{withCredentials: true})
          if(response.status===200){
    
                setRedirect(true)
                // dispatch({
                //   type: 'SET_USER_TOKEN',
                //   payload: response.data
                // })
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

export const registerUser = (name,email,password,setRedirect)=>{
    return async(dispatch,getState)=>{
      const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/register`
      try {
          let response = await axios.post(baseUrl,{ name:name,email:email,password:password },{withCredentials: true})
          if(response.status===200){  
                setRedirect(true)
                // dispatch({
                //     type: 'SET_USER_TOKEN',
                //     payload: response.data
                // })
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