import React, { useRef, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { useStateValue } from '../state'

const TopBar = props => {
    const [{ init, toggle, loading }, dispatch] = useStateValue()
    const nav = useRef(null)

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
        if (loading) {
            nav.current.style.opacity = 0
        } else {
            setTimeout(() => {
                nav.current.style.opacity = 1
            }, 800)
        }
    }, [loading])



    return (
        <nav ref={nav} className='topbar'>
            <div className='topbar__inner'>
                <NavLogo handleNav={handleNav} />
                <NavLinks handleNav={handleNav} />
            </div>
        </nav>
    )
}

export default withRouter(TopBar)