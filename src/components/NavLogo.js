import React, { useRef } from 'react'

const NavLogo = props => {
    const logo = useRef(null)

    return (
        <div className='nav-logo__container'>
            <div className='nav-logo' onClick={() => props.handleNav('home')} ref={logo} />
        </div>
    )
}

export default NavLogo