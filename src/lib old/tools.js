import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import store from '../redux/store'
import { setUserRefreshToken, setUserAccessToken } from '../redux/actions';


const isEmpty = (param)=>{
    if(typeof param === 'object' && Object.keys(param).length > 0){
        return false
    } else if (Array.isArray(param) && param.length > 0){
        return false
    } else if(typeof param === 'string' || 'number' || 'boolean' || 'undefined'){
        return 'Parameter should be an Array or Object'
    } else{
    return true
    }
}

const setUserTokens = (tokens) => {
    store.dispatch(setUserRefreshToken(tokens.refreshToken))
    store.dispatch(setUserAccessToken(tokens.accessToken))
}

const tools= {
    isEmpty: isEmpty,
    setUserTokens:setUserTokens
}

export default tools