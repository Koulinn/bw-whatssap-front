import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogged } from '../../redux/actions'
import { useEffect } from 'react'

function OAuthAccess() {
    const isLogged = useSelector(state => state.user.isLogged)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(()=> {
        console.log('inside use Effect')
        dispatch(setUserLogged()) },[])

    if(isLogged){
        history.push('/')
    }
    return (
        <div>
            
        </div>
    )
}

export default OAuthAccess
