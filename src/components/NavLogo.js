import React, { useEffect, useRef } from 'react'
import { useStateValue } from '../state'

const NavLogo = props => {
    const [{ page }] = useStateValue()
    const logo = useRef(null)

    useEffect(() => {

        if (page !== 'home') {
            setTimeout(() => {
                logo.current.style.opacity = 1
            }, 466)
        } else {
            logo.current.style.opacity = 0
        }
    }, [page])

    return (
        <div className='nav-logo__container'>
            <div className='nav-logo' onClick={() => props.handleNav('home')} ref={logo} />
        </div>
    )
}

export default NavLogo