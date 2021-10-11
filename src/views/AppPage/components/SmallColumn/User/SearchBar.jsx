import React from 'react'
import { connect } from 'react-redux'
import InputDefault from '../../../../../components/Login_Register_Shareable/InputDefault/InputDefault'
import { useState } from 'react'

export const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="form_input d-flex flex-column" >
            <label className="invisible" htmlFor='searchBar'>Search Bar</label>
            <input className="w-100" id='searchBar' type="text" placeholder='Start a new chat or search your friends' onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
