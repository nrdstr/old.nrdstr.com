import React from 'react'
import { useStateValue } from '../state'

const NavLinks = props => {
    const [{ page }] = useStateValue()
    return (
        <ul className='nav-links'>
            <li>
                <button onClick={() => props.handleNav('media')} className={`nav-link btn color-2 ${page === 'media' && 'nav-link--active'}`}><span>media</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('web')} className={`nav-link btn color-1 ${page === 'web' && 'nav-link--active'}`}><span>web</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('music')} className={`nav-link btn color-3 ${page === 'music' && 'nav-link--active'}`}><span>music</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('contact')} className={`nav-link btn color-4 ${page === 'contact' && 'nav-link--active'}`}><span>contact</span></button>
            </li>
        </ul>
    )
}

export default NavLinks