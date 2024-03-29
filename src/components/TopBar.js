import React, { useRef, useEffect } from 'react'
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

    const handleOpenMenu = () => {
        dispatch({
            type: 'toggle',
            payload: { ...toggle, menu: true }
        })
    }

    useEffect(() => {
        if (loading || (!shapesLoading.toggled && init)) {
            nav.current.style.opacity = 0
        } else {
            setTimeout(() => {
                nav.current.style.opacity = 1
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, shapesLoading.toggled])



    return (
        <nav ref={nav} className='topbar'>
            <div className='topbar__inner'>
                <NavLogo handleNav={handleNav} />
                <div className='desktop'>
                    <NavLinks handleNav={handleNav} />
                </div>
                <div className='mobile'>
                    <button className='mobile-menu-btn' title='open mobile menu' onClick={handleOpenMenu}>
                        <span className='mobile-menu-btn__bar' />
                        <span className='mobile-menu-btn__bar' />
                        <span className='mobile-menu-btn__bar' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(TopBar)