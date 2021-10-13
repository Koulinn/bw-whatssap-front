import React from 'react'
import { connect } from 'react-redux'
import ReturnMain from '../ShareableComp/ReturnMain'
import { MdArrowBack, MdOutlineEdit, MdOutlineCheck } from 'react-icons/md'
import { useState } from 'react'

export const Profile = (props) => {
    const [usernameEditMode, setUsernameEditMode] = useState(false)
    const [aboutEditMode, setAboutEditMode] = useState(false)
    return (
        <div id="userProfile" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain icon={<MdArrowBack />} title="Profile" />
            </header>
            <div className="d-flex flex-column h-100 bg-grey ">
                <div className="my-4">
                    <div className="d-flex justify-content-center position-relative">
                        <label htmlFor="userAvatar">
                            <img width="200" height="200" style={{ borderRadius: "500px" }} src="https://www.seekpng.com/png/full/115-1150456_avatar-generic-avatar.png" alt="" />
                        </label>
                        <input id="userAvatar" type="file" className="invisible position-absolute" />
                    </div>
                </div>
                <div className="my-4 bg-light-grey py-3 shadow-effect">
                    <label htmlFor="userNameInput" className="mx-3 pl-3">Your name</label>
                    <div className="d-flex justify-content-between align-items-center">

                        <input type="text" id="userNameInput" className="bg-transparent mx-3" placeholder="User name" onFocus={() => setUsernameEditMode(true)} onBlur={() => setUsernameEditMode(false)} />
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

                        <input type="text" id="aboutInput" className="bg-transparent mx-3" placeholder="Available" onFocus={() => setAboutEditMode(true)} onBlur={() => setAboutEditMode(false)} />
                        <div className="d-flex justify-content-center align-items-center mr-4 icon-wrapper" >
                            {aboutEditMode ? <MdOutlineCheck /> : <MdOutlineEdit />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
