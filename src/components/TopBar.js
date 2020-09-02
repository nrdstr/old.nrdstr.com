import React, { useRef, useEffect } from 'react'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { useStateValue } from '../state'

const TopBar = props => {
    const [{ page, init, toggle }, dispatch] = useStateValue()
    const nav = useRef(null)

    const handleNav = page => {
        if (init) dispatch({ type: 'init', payload: false })
        if (!init && page === 'home') {
            dispatch({ type: 'toggle', payload: { ...toggle, home: true } })
            setTimeout(() => {
                dispatch({ type: 'page', payload: page })
            }, 200)
        } else {
            dispatch({ type: 'toggle', payload: { ...toggle, home: false } })
            dispatch({ type: 'page', payload: page })
        }
    }

    useEffect(() => {
        if (init) {
            setTimeout(() => {
                nav.current.style.opacity = 1
            }, 700)
        }
    }, [page])

    return (
        <nav ref={nav} className='topbar'>
            <div className='topbar__inner'>
                <NavLogo handleNav={handleNav} />
                <NavLinks handleNav={handleNav} />
            </div>
        </nav>
    )
}

export default TopBar