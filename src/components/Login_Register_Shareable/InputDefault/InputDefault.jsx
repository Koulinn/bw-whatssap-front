import React from 'react'

function InputDefault({inputID,value,handleInput,placeholderText, label, type}) {
    return (
        <div className="form_input d-flex flex-column mt-4" >
            <label className="mr-3 mb-3 pl-0 d-flex align-items-center" htmlFor={inputID}>{label}</label>
            <input className="col-8"  type={type} value={value} onChange={(e)=>handleInput(`${inputID}`,e.target.value)} placeholder={placeholderText}/>
        </div>
    )
}

export default InputDefault
