import React from 'react'
import { connect } from 'react-redux'

export const SearchContacs = (props) => {
    return (
        <div className="w-100 px-3 pb-3">
            <div className="d-flex flex-column">
                <label htmlFor="searchContacts" className="invisible"> Search contacts</label>
                <input id="searchContacts" className="border-bottom rounded-0" type="text" placeholder="Type contact name" />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacs)
