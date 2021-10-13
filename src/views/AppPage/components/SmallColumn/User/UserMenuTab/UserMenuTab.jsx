import React from 'react'
import { connect } from 'react-redux'

export const UserMenuTab = ({setAppDisplayState}) => {
    return (
        <div id="userMenus" className="bg-white position-absolute py-3">
            <ul className="m-0 pl-0 px-3">
                <li className="mt-2 px-3" onClick={()=> setAppDisplayState({
                    showProfile: false,
                    showCreateRoom: true,
                    showDisplayLastChatsColumn: false
                })}>
                   New group
                </li>
                <li className="my-3 px-3">
                    Starred
                </li>
                <li className="mb-3 px-3">
                    Settings
                </li>
                <li className="mb-2 px-3">
                    Log out
                </li>
            </ul>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuTab)
