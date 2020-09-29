import React, { useRef, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import { useStateValue } from '../state'

const TopBar = props => {
    const [{ init, toggle, loading, shapesLoading, page }, dispatch] = useStateValue()
    const nav = useRef(null)

    const handleNav = page2 => {
        if (page2 !== page) {
            dispatch({ type: 'shapesLoading', payload: { page: page2, toggled: true } })

            if (init) dispatch({ type: 'init', payload: false })
            if (!init && page2 === 'home') {
                props.history.push('/')
                dispatch({ type: 'page', payload: page2 })
            } else {
                dispatch({ type: 'toggle', payload: { ...toggle, home: false } })
                dispatch({ type: 'page', payload: page2 })
                if (page2 === 'portfolio') {
                    props.history.push(`/${page2}/${toggle[page2].current}`)
                } else {
                    props.history.push(`/${page2}`)
                }
            }
        }
    }

    useEffect(() => {
        if (loading || (!shapesLoading.toggled && init)) {
            nav.current.style.opacity = 0
        } else {
            setTimeout(() => {
                nav.current.style.opacity = 1
            }, 1000)
        }
    }, [loading, shapesLoading.toggled])



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