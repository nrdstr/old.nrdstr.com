import React from 'react'

const NavLinks = props => {
    return (
        <ul className='nav-links'>
            <li>
                <button onClick={() => props.handleNav('media')} className='btn color-2'><span>media</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('web')} className='btn color-1'><span>web</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('music')} className='btn color-3'><span>music</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('contact')} className='btn color-4'><span>contact</span></button>
            </li>
        </ul>
    )
}

export default NavLinks