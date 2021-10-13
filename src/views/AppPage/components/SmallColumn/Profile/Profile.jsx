import React from 'react'
import { connect } from 'react-redux'
import ReturnMain from '../ShareableComp/ReturnMain'
import { MdArrowBack, MdOutlineEdit, MdOutlineCheck } from 'react-icons/md'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const Profile = ({ setAppDisplayState }) => {
    const [usernameEditMode, setUsernameEditMode] = useState(false)
    const [aboutEditMode, setAboutEditMode] = useState(false)
    const userData = useSelector(state => state.user.userData)
    const { avatar, name, email, bio } = userData
    const [userNewAvatar, setNewAvatar] = useState(null)

    const sendUserAvatar = async () => {
        try {
            // Need to test later
            const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/registerd`
            let response = await axios.post(baseUrl, { userNewAvatar }, { withCredentials: true })
            if (response.status === 200) {
                console.log(response)
            } else {
                console.log('inside else get newUserImg')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const userAvatarConvertToUpload = (e) => {
        let avatarImage = new FormData()
        let imageUrlFile = e.target.files[0]
        avatarImage.append("image", imageUrlFile)
        setNewAvatar(avatarImage)
    }

    const updateUserData = async (property, value) => {
        console.log('updateUserData', property, '<<<<<<<<<<<<<propertty   value>>>>>>>>>>>>>>>>>>>>>>>', value)
        try {
            // Need to test later
            const baseUrl = `${process.env.REACT_APP_PROD_API_URL}user/me`
            let response = await axios.put(baseUrl, { [property]: value }, { withCredentials: true })
            if (response.status === 200) {
                console.log(response)
            } else {
                console.log('inside else get newUserImg')
            }
        } catch (error) {
            console.log(error)
        }

    }


    // console.log(userData, 'props from profiileeee')
    return (
        <div id="userProfile" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain setAppDisplayState={setAppDisplayState} icon={<MdArrowBack />} title="Profile" />
            </header>
            <div className="d-flex flex-column h-100 bg-grey ">
                <div className="my-4">
                    <div className="d-flex justify-content-center position-relative">
                        <form onSubmit={sendUserAvatar}>
                            <label htmlFor="userAvatar">
                                <img width="200" height="200" style={{ borderRadius: "500px" }} src={userNewAvatar ? userNewAvatar : avatar} alt="" />
                            </label>
                            <input id="userAvatar" type="file" className="invisible position-absolute" onChange={(e) => userAvatarConvertToUpload(e)} />
                        </form>
                    </div>
                </div>
                <div className="my-4 bg-light-grey py-3 shadow-effect">
                    <label htmlFor="userNameInput" className="mx-3 pl-3">{name}</label>
                    <div className="d-flex justify-content-between align-items-center">

                        <input type="text" id="userNameInput" className="bg-transparent mx-3" placeholder={name} 
                        onFocus={() => setUsernameEditMode(true)} 
                        onBlur={(e) => {setUsernameEditMode(false)
                            updateUserData('name', e.target.value) 
                        }}
                         />
                        <div className="d-flex justify-content-center align-items-center mr-4 icon-wrapper">
                            {usernameEditMode ? <MdOutlineCheck /> : <MdOutlineEdit />}
                        </div>
                    </div>
                </div>
                <div className=" d=flex justify-content-center my-1 px-4">
                    <span className="text-muted text-center">This is not your username or pin. This name will be visible to your WhatsApp contacts.</span>
                </div>
                <div className="my-4 bg-light-grey py-3 shadow-effect">
                    <label htmlFor="aboutInput" className="mx-3 pl-3">About</label>
                    <div className="d-flex justify-content-between align-items-center">

                        <input type="text" id="aboutInput" className="bg-transparent mx-3" placeholder={bio ? bio : 'Please walk with me!'}
                            onFocus={() => setAboutEditMode(true)}
                            onBlur={(e) => { setAboutEditMode(false)
                                updateUserData('bio', e.target.value) 
                            }}
                        />
                        <div className="d-flex justify-content-center align-items-center mr-4 icon-wrapper" >
                            {aboutEditMode ? <MdOutlineCheck /> : <MdOutlineEdit />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



const mapDispatchToProps = {

}

export default connect(mapDispatchToProps)(Profile)
