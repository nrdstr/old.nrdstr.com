import React from 'react'
import { useStateValue } from './state'

const TopBar = props => {
    const [init, dispatch] = useStateValue()

    const handleNav = page => {
        if (init) dispatch({ type: 'init', payload: false })
        dispatch({ type: 'page', payload: page })
    }

    return (
        <nav className='topbar'>
            <ul className='topbar__nav-links'>
                <li>
                    <button onClick={() => handleNav('home')} className='btn color-2'><span>home</span></button>
                </li>
                <li>
                    <button onClick={() => handleNav('graphics')} className='btn color-1'><span>graphics</span></button>
                </li>
                <li>
                    <button onClick={() => handleNav('web')} className='btn color-3'><span>web</span></button>
                </li>
                <li>
                    <button onClick={() => handleNav('contact')} className='btn color-4'><span>contact</span></button>
                </li>
            </ul>
        </nav>
    )
}

export default TopBar