import React from 'react'
import { Spinner } from 'react-bootstrap'



function SpinnerCircle() {
    return (
        <div className="d-flex justify-content-center">
             <Spinner animation="border" variant="success" />
        </div>
    )
}

export default SpinnerCircle
