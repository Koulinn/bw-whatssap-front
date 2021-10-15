import React, { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import ReturnMain from '../ShareableComp/ReturnMain'
import { SearchContacs } from '../ShareableComp/SearchContacs'
import UserCard from '../CreateGroup/UserCard/UserCard'
import UserBadge from '../UserBadge/UserBadge'
import CreateGroupBtn from './CreateGroupBtn/CreateGroupBtn'
import axios from 'axios'
import { useSelector } from 'react-redux'


export const CreateGroup = ({ setAppDisplayState }) => {
    const [userList, setUserList] = useState([])
    const loggedUserId = useSelector(state => state.user.userData._id)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [selectedUsersId, setSelectedUsersId] = useState([loggedUserId])

    const getAllUsers = async () => {
        try {

            const response = await axios.get(`${process.env.REACT_APP_PROD_API_URL}user`, { withCredentials: true })
            if (response.status === 200) {
                setUserList(response.data)
            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllUsers()
    }, [])
    console.log(selectedUsers, 'selectedUsers user has been clicked')
    return (
        <div id="CreateGroup" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain icon={<MdArrowBack />} title="Add group participants" setAppDisplayState={setAppDisplayState} />
            </header>
            <div className="d-flex flex-column bg-white" style={{ height: '85.55%' }}>
                <div className="d-flex align-items-center flex-wrap mt-3 px-3">
                {selectedUsers.length > 0 ? selectedUsers.map(user => <UserBadge name={user.name} />)
                        : ''}

                    {/* <UserBadge name="random" /> */}
                </div>
                <CreateGroupBtn selectedUsersId={selectedUsersId} setAppDisplayState={setAppDisplayState} />

                <SearchContacs />
                <div className="contacts-wrapper">

                    {userList.length > 0 ? userList.filter(user => user._id !== loggedUserId)
                        .map(user => <UserCard key={user._id} selectedUsersId={selectedUsersId} setSelectedUsersId={setSelectedUsersId} selectedUsers={selectedUsers} user={user} setSelectedUsers={setSelectedUsers} setAppDisplayState={setAppDisplayState} />)
                        : 'No users to show :('}

                </div>

            </div>

        </div>
    )
}




export default CreateGroup
