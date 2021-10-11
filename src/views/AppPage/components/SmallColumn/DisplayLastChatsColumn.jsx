import React from 'react'
import { connect } from 'react-redux'
import UserMenu from './User/UserMenu'

export const DisplayLastChatsColumn = (props) => {
    return (
        <div>
            <UserMenu/>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayLastChatsColumn)
