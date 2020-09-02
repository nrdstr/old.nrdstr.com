import React from 'react'

const NavLinks = props => {
    return (
        <ul className='nav-links'>
            <li>
                <button onClick={() => props.handleNav('home')} className='btn color-2'><span>home</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('media')} className='btn color-1'><span>media</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('web')} className='btn color-3'><span>web</span></button>
            </li>
            <li>
                <button onClick={() => props.handleNav('pricing')} className='btn color-4'><span>pricing</span></button>
            </li>
        </ul>
    )
}

export default NavLinks