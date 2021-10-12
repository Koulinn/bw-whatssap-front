// import axios from "axios"


// const userLogin = async ({login,setRedirect}) => {
//     try {
//         const serverResponse = await axios.post(`http://localhost:3001/user/login`, { email:login.email,password:login.password })
//         if(serverResponse.status === 200){
//             console.log(serverResponse.data)
//             setRedirect(true)
//         } else {
//             console.log('else')
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

// const requests = {
//     userLogin: userLogin
// }

// export default requests