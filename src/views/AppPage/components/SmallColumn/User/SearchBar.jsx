import React from 'react'
import { connect } from 'react-redux'
import InputDefault from '../../../../../components/Login_Register_Shareable/InputDefault/InputDefault'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

export const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div id="searchBar-wrapper" className="form_input d-flex align-items-center bg-grey p-3" >
            <div className="bg-white w-100 d-flex align-items-center">
                <label htmlFor='searchBar' className="ml-2">
                    <AiOutlineSearch  />
                </label>
            <input className="w-100" id="searchBar" type="text" placeholder='Search or start a new chat' onChange={(e) => setSearchValue(e.target.value)} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
