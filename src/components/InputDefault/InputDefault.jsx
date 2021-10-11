import React from 'react'

function InputDefault({inputID, setFunc, placeholderText, label}) {
    return (
        <div className="form_input d-flex flex-column mt-4" >
            <label className="mr-3 mb-3 col-2 pl-0 d-flex align-items-center" htmlFor={inputID}>{label}</label>
            <input className="col-8" id={inputID} type="text" placeholder={placeholderText} onChange={(e) => setFunc(e.target.value)} />
        </div>
    )
}

export default InputDefault
