import React from 'react'
import { connect } from 'react-redux'
import { MdArrowBack } from 'react-icons/md'
import ReturnMain from '../ShareableComp/ReturnMain'
import { SearchContacs } from '../ShareableComp/SearchContacs'
import { ChatRoom } from '../RecentChatColumn/Components/ChatRoom/ChatRoom'
import UserCard from './UserCard/UserCard'

export const CreateRoom = (props) => {
    return (
        <div id="createRoom" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain icon={<MdArrowBack />} title="Add group participants" />
            </header>
            <div className="d-flex flex-column bg-white" style={{ height: '85.55%' }}>
                <SearchContacs />
                <div className="contacts-wrapper">
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>
                    <UserCard name="randomName" bio="I love cake"/>

                    
    
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom)
