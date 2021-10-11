import React from 'react'

function InputDefault({inputID, setFunc, placeholderText, label}) {
    return (
        <div className="form_input d-flex mt-4" >
            <label className="mr-3 col-3 pl-0 d-flex align-items-center" htmlFor={inputID}>{label}</label>
            <input className="col" id={inputID} type="text" placeholder={placeholderText} onChange={(e) => setFunc(e.target.value)} />
        </div>
    )
}

export default InputDefault
