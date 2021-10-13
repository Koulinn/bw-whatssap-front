import React from 'react'
import { connect } from 'react-redux'
import ReturnMain from '../ShareableComp/ReturnMain'
import { MdArrowBack, MdOutlineEdit, MdOutlineCheck } from 'react-icons/md'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const [usernameEditMode, setUsernameEditMode] = useState(false)
    const [aboutEditMode, setAboutEditMode] = useState(false)
    const userData = useSelector(state=>state.user.userData)
    const{avatar, name, email, bio} = userData

    
    console.log(userData, 'props from profiileeee')
    return (
        <div id="userProfile" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain icon={<MdArrowBack />} title="Profile" />
            </header>
            <div className="d-flex flex-column h-100 bg-grey ">
                <div className="my-4">
                    <div className="d-flex justify-content-center position-relative">
                        <label htmlFor="userAvatar">
                            <img width="200" height="200" style={{ borderRadius: "500px" }} src={avatar} alt="" />
                        </label>
                        <input id="userAvatar" type="file" className="invisible position-absolute" />
                    </div>
                </div>
                <div className="my-4 bg-light-grey py-3 shadow-effect">
                    <label htmlFor="userNameInput" className="mx-3 pl-3">{name}</label>
                    <div className="d-flex justify-content-between align-items-center">

                        <input type="text" id="userNameInput" className="bg-transparent mx-3" placeholder={name} onFocus={() => setUsernameEditMode(true)} onBlur={() => setUsernameEditMode(false)} />
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

                        <input type="text" id="aboutInput" className="bg-transparent mx-3" placeholder={bio? bio : 'Please walk with me!'} onFocus={() => setAboutEditMode(true)} onBlur={() => setAboutEditMode(false)} />
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
