import React, { useState, useEffect, useRef } from 'react'
import { useStateValue } from './state'
import Logo from './components/Logo'
import Socials from './components/Socials'

const Main = () => {
    const [{ page, init }] = useStateValue()
    const [contentStyles, setContentStyles] = useState({ opacity: 0, display: 'none' })
    const [initAnimation, setInitAnimation] = useState('main--init')
    const content = useRef(null)
    const main = useRef(null)
    const home = useRef(null)

    useEffect(() => {
        if (init) {
            setTimeout(() => {
                setInitAnimation('')
            }, 700)
            setTimeout(() => {
                home.current.classList.remove('hide', 'remove')
            }, 875)
        }

        if (!init && page === 'home') {
            setContentStyles({ opacity: 0 })
            setTimeout(() => {
                home.current.classList.remove('remove')
                home.current.classList.remove('hide')
            }, 400)
        }

        if (page !== 'home') {
            if (content) {
                setTimeout(() => {
                    setContentStyles({ display: 'flex', opacity: 1 })
                }, 466)
            }
        } else {
            setContentStyles({ opacity: 0, display: 'none' })
        }
    }, [page])

    if (page === 'home') {
        return (
            <main ref={main} className={`main main__logo ${initAnimation} color-2`}>
                <div ref={home} className={`home hide remove`}>
                    <Logo />
                    <Socials />
                </div>
            </main>
        )
    } else if (page === 'media') {
        return (
            <main className={`main main__content color-1}`}>
                <div style={contentStyles} ref={content} className={`content color-2`}>
                    <h1 className='bg--blue'>media</h1>
                </div>
            </main>
        )
    } else if (page === 'web') {
        return (
            <main className={`main main__content color-3`}>
                <div style={contentStyles} ref={content} className={`content color-1`}>
                    <h1 className='bg--purple'>web</h1>
                </div>
            </main>
        )
    } else if (page === 'music') {
        return (
            <main className={`main main__content color-4`}>
                <div style={contentStyles} ref={content} className={`content color-3`}>
                    <h1 className='bg--yellow'>music</h1>
                </div>
            </main>
        )
    } else if (page === 'pricing') {
        return (
            <main className={`main main__content color-2`}>
                <div style={contentStyles} ref={content} className={`content color-3`}>
                    <h1 className='bg--pink'>pricing</h1>
                </div>
            </main>
        )
    } else {
        return (
            <main className={`main main__content main--error color-2`}>
                <div style={contentStyles} ref={content} className={`content color-3`}>
                    <h1 className='bg--yellow'>404</h1>
                    <p>something is wrong</p>
                </div>
            </main>
        )
    }
}

export default Main