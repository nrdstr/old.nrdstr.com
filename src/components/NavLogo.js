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
            <svg onClick={() => props.handleNav('home')} id="nrdstr" ref={logo} className='nav-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1794 1254.07">
                <g id="n_logo" dataname="n logo">
                    <path d="M460,977c0-162.37,131.63-294,294-294s294,131.63,294,294l.5,44.23V1627h345.36v-605.8c0-359.51-268.93-648.26-597.31-648.26C672,373,544.61,429.58,448.36,514.51L391.74,406.94H103V1627H459.69v-605.8Z" transform="translate(-103 -372.97)" />
                    <g id="_." dataname=".">
                        <path d="M1548.51,1626.08V1255.24H1897v370.84Z" transform="translate(-103 -372.97)" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default NavLogo