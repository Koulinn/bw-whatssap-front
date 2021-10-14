import store from '../redux/store'
import { setUserRefreshToken } from '../redux/actions';


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



const tools= {
    isEmpty: isEmpty,
}

export default tools