import React, { useEffect, useRef } from 'react'
import { useStateValue } from '../state'
import { withRouter } from 'react-router-dom'
import NavLinks from './NavLinks'

const MobileMenu = props => {
    const [{ toggle, init, page }, dispatch] = useStateValue()
    const menu = useRef(null)

    const handleCloseMenu = () => {
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                menu: false
            }
        })
        hideMenu()
    }

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
        dispatch({ type: 'toggle', payload: { ...toggle, menu: false } })
        hideMenu()
    }

    const hideMenu = () => {
        menu.current.classList.add('hide')
        setTimeout(() => {
            menu.current.classList.add('remove')
        }, 200)
    }

    useEffect(() => {
        if (toggle.menu) {
            menu.current.classList.remove('remove', 'hide')
            menu.current.classList.add('animate--fade-in-fast')
            setTimeout(() => {
                menu.current.classList.remove('animate--fade-in-fast')
            }, 200)
        }
    }, [toggle.menu])

    return (
        <div ref={menu} className='mobile-menu hide remove'>
            <nav className='mobile-menu__inner'>
                <div className='mobile-menu__top-bar'>
                    <button onClick={handleCloseMenu} title='close mobile menu' className='mobile-menu__close' />
                </div>
                <NavLinks handleNav={handleNav} />
            </nav>
        </div>
    )
}

export default withRouter(MobileMenu)