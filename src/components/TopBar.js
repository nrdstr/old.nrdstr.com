import React, { useRef, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { useStateValue } from '../state'

const TopBar = props => {
    const [{ page, init, toggle }, dispatch] = useStateValue()
    const nav = useRef(null)
    const [navStyle, setNavStyle] = useState({ opacity: 0 })

    const handleNav = page => {
        if (init) dispatch({ type: 'init', payload: false })
        if (!init && page === 'home') {
            dispatch({ type: 'toggle', payload: { ...toggle, home: true } })
            props.history.push('/')
            setTimeout(() => {
                dispatch({ type: 'page', payload: page })
            }, 200)
        } else {
            dispatch({ type: 'toggle', payload: { ...toggle, home: false } })
            dispatch({ type: 'page', payload: page })
            if (page === 'media') {
                props.history.push(`/${page}/${toggle[page].current}`)
            } else {
                props.history.push(`/${page}`)
            }
        }
    }

    useEffect(() => {
        // if (init && !toggle.modal.toggled) {
        //     console.log('its this')
        //     setTimeout(() => {
        //         setNavStyle({ opacity: 1, zIndex: 2 })
        //     }, 700)
        // } else if (toggle.modal.toggled) {
        //     setNavStyle({ opacity: 0, zIndex: 0 })
        // } else {
        //     setNavStyle({ opacity: 1, zIndex: 2 })
        // }


        if (toggle.modal.toggled) {
            setNavStyle({ opacity: 0, zIndex: 0 })
        } else {
            setNavStyle({ opacity: 1, zIndex: 2 })
        }

        // if (toggle.modal.toggled) {
        //     setNavStyle({ opacity: 0, zIndex: 0 })
        // }

    }, [page, toggle.modal])

    return (
        <nav style={navStyle} ref={nav} className='topbar'>
            <div className='topbar__inner'>
                <NavLogo handleNav={handleNav} />
                <NavLinks handleNav={handleNav} />
            </div>
        </nav>
    )
}

export default withRouter(TopBar)