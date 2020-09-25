import React from 'react'
import { useStateValue } from '../state'

const NavLinks = props => {
    const [{ page }] = useStateValue()
    return (
        <ul className='nav-links'>
            <li>
                <button onClick={() => props.handleNav('portfolio')} className={`nav-link btn color-2 ${page === 'portfolio' && 'nav-link--active'}`}><span>portfolio</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('about')} className={`nav-link btn color-1 ${page === 'about' && 'nav-link--active'}`}><span>about</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('blog')} className={`nav-link btn color-3 ${page === 'blog' && 'nav-link--active'}`}><span>blog</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('contact')} className={`nav-link btn color-4 ${page === 'contact' && 'nav-link--active'}`}><span>contact</span></button>
            </li>
        </ul>
    )
}

export default NavLinks