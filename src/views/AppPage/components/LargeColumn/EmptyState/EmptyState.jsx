import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as EmptyStateImg } from '../../../../../assets/imgs/emptyState.svg'

export const EmptyState = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            
                <EmptyStateImg className="emptyStateImg"/>
            
            <div>
                <div>
                    <h1 className="mt-5 text-center">Talk with your friends</h1>
                </div>
                <div className="mt-3">
                    <small className="text-center">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</small>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyState)
