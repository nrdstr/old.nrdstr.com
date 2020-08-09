import React, { useEffect, useRef } from 'react'
import { useStateValue } from './state'

const TopBar = props => {
    const [{ page, init, toggle }, dispatch] = useStateValue()
    const logo = useRef(null)
    const nav = useRef(null)

    const handleNav = page => {
        if (init) dispatch({ type: 'init', payload: false })
        if (!init && page === 'home') {
            dispatch({ type: 'toggle', payload: { ...toggle, home: true } })
            setTimeout(() => {
                dispatch({ type: 'page', payload: page })
            }, 200)
        } else {
            dispatch({ type: 'toggle', payload: { ...toggle, home: false } })
            dispatch({ type: 'page', payload: page })
        }
    }

    useEffect(() => {
        if (init) {
            setTimeout(() => {
                nav.current.style.opacity = 1
            }, 700)
        }
        if (page !== 'home') {
            setTimeout(() => {
                logo.current.style.opacity = 1
            }, 466)
        } else {
            logo.current.style.opacity = 0
        }
    }, [page])

    return (
        <nav ref={nav} className='topbar'>
            <div className='topbar__inner'>
                <div className='topbar__logo-container'>
                    <svg id="nrdstr" ref={logo} className='topbar__logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1794 1254.07">
                        <g id="big_n" data-name="big n">
                            <g id="_." data-name=".">
                                <path className="cls-1" d="M1548.51,1626.08V1255.24H1897v370.84Z" transform="translate(-103 -372.97)" />
                            </g>
                            <g id="n">
                                <path className="cls-1" d="M448.36,514.51C544.61,429.58,672,373,796.55,373c328.38,0,597.31,288.75,597.31,648.26V1627H1048.5v-605.8c0-175.51-205.91-331.2-316.6-331.2-169.84,0-272.21,155.69-272.21,331.2V1627H103V406.94H391.74Z" transform="translate(-103 -372.97)" />
                            </g>
                        </g>
                    </svg>
                </div>
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
                        <button onClick={() => handleNav('pricing')} className='btn color-4'><span>pricing</span></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar