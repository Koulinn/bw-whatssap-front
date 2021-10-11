import React from 'react'

function HeaderLoginRegister({hideLogo}) {
    return (
        <div className="d-flex px-3 pt-4 pb-64 bg-green">
            <img src={hideLogo ? '' : "https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"} alt="" />
            
        </div>
    )
}

export default HeaderLoginRegister
