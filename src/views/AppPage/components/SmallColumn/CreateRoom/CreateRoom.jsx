import React from 'react'
import { connect } from 'react-redux'
import { MdArrowBack } from 'react-icons/md'
import ReturnMain from '../ShareableComp/ReturnMain'
import { SearchContacs } from '../ShareableComp/SearchContacs'
import UserCard from './UserCard/UserCard'
import UserBadge from '../UserBadge/UserBadge'
import CreateGroupBtn from './CreateGroupBtn/CreateGroupBtn'

export const CreateRoom = ({setAppDisplayState}) => {
    return (
        <div id="createRoom" className="d-flex flex-column h-100 bg-green-light ">
            <header className="d-flex" style={{ height: '149px' }}>
                <ReturnMain icon={<MdArrowBack />} title="Add group participants" setAppDisplayState={setAppDisplayState} />
            </header>
            <div className="d-flex flex-column bg-white" style={{ height: '85.55%' }}>
                <div className="d-flex align-items-center flex-wrap mt-3 px-3">
                    {/* Need to add logic for spacing and aligment */}
                    <UserBadge name="random" />
                </div>
                <CreateGroupBtn />

                <SearchContacs />
                <div className="contacts-wrapper">
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />
                    <UserCard name="randomName" bio="I love cake" />



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
