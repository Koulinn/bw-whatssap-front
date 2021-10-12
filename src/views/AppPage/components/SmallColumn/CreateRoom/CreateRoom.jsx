import React from 'react'
import { connect } from 'react-redux'
import {MdArrowBack} from 'react-icons/md'
import ReturnMain from '../ShareableComp/ReturnMain'
import { SearchContacs } from '../ShareableComp/SearchContacs'

export const CreateRoom = (props) => {
    return (
        <div id="createRoom" className="d-flex flex-column h-100 bg-green ">
           <header className="d-flex" style={{height:'149px'}}>
               <ReturnMain icon={<MdArrowBack/>} title="Add group participants"/>
            </header>
           <div className="h-100 d-flex flex-column bg-white">
               <SearchContacs/>

           </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom)
