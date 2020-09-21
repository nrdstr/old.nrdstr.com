import React, { useState, useEffect, useRef } from 'react'
import { useStateValue } from './state'
import Logo from './components/Logo'
import Socials from './components/Socials'
import Grid from './components/Grid'
import Loader from './components/Loader'
import Modal from './components/Modal'
import { withRouter } from "react-router-dom"
import GridNav from './components/GridNav'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const Main = props => {
    const [{ page, init, data, toggle, loading }, dispatch] = useStateValue()
    const [contentStyles, setContentStyles] = useState({ opacity: 0, display: 'none' })
    const [initAnimation, setInitAnimation] = useState('main--init')
    const content = useRef(null)
    const main = useRef(null)
    const home = useRef(null)

    const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID)

    const path = props.history.location.pathname.substr(1, props.history.location.pathname.length).split('/')

    const handleGoogleSheets = async () => {
        try {
            await doc.useServiceAccountAuth({
                client_email: process.env.REACT_APP_CLIENT_EMAIL,
                private_key: process.env.REACT_APP_PRIVATE_KEY
            })

            await doc.loadInfo()

            const logosSheet = doc.sheetsById[process.env.REACT_APP_LOGOS_SHEET_ID]
            const graphicsSheet = doc.sheetsById[process.env.REACT_APP_GRAPHICS_SHEET_ID]
            const graphicsRows = await graphicsSheet.getRows()
            const logoRows = await logosSheet.getRows()
            let logoIds = []
            let graphicIds = []

            for (let i = 0; i < logoRows.length; i++) {
                logoIds.push(logoRows[i].id)
            }

            for (let i = 0; i < graphicsRows.length; i++) {
                graphicIds.push(graphicsRows[i].id)
            }
            dispatch({
                type: 'data',
                payload: {
                    ...data,
                    media: {
                        ...data.media,
                        logos: logoIds.reverse(),
                        graphics: graphicIds.reverse()
                    }
                }
            })

            dispatch({
                type: 'loading',
                payload: false
            })


        } catch (e) {
            console.error(e)
        }
    }

    const handlePath = () => {
        if (path[1]) {
            dispatch({
                type: 'toggle',
                payload: {
                    ...toggle,
                    [page]: {
                        current: path[1]
                    }
                }
            })
        }

        if (path[2] && path[0] === 'media') {
            const dataPath = data[path[0]]
            const dataTab = dataPath[path[1]]
            const index = dataTab.indexOf(path[2])
            dispatch({
                type: 'toggle',
                payload: {
                    ...toggle,
                    [page]: {
                        current: path[1]
                    }
                }
            })

            dispatch({
                type: 'toggle',
                payload: {
                    ...toggle,
                    modal: {
                        toggled: true,
                        type: path[0],
                        id: path[2],
                        tab: path[1],
                        index: index
                    }
                }
            })
        }
    }

    useEffect(() => {
        handleGoogleSheets()

        if (!loading) {
            if (path.length > 0 && path[0]) {
                dispatch({
                    type: 'init',
                    payload: false
                })
                setInitAnimation('')

                dispatch({
                    type: 'page',
                    payload: path[0]
                })

                handlePath()
            } else {
                if (init) {
                    setTimeout(() => {
                        setInitAnimation('')
                    }, 300)
                    setTimeout(() => {
                        home.current.classList.remove('hide', 'remove')
                    }, 575)
                }

                if (!init && page === 'home') {
                    setContentStyles({ opacity: 0 })
                    setTimeout(() => {
                        home.current.classList.remove('remove')
                        home.current.classList.remove('hide')
                    }, 300)
                }
            }


            if (page !== 'home') {
                if (content) {
                    setTimeout(() => {
                        setContentStyles({ display: 'flex', opacity: 1 })
                    }, 300)
                }
            } else {
                setContentStyles({ opacity: 0, display: 'none' })
            }
        }
    }, [page, loading])


    if (!loading) {
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
                        <GridNav type={'media'} tabs={['logos', 'graphics', 'video']} />
                        <Grid type={'media'} data={data.media} />
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
        } else if (page === 'contact') {
            return (
                <main className={`main main__content color-2`}>
                    <div style={contentStyles} ref={content} className={`content color-3`}>
                        <h1 className='bg--pink'>contact</h1>
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
    } else {
        return <Loader />
    }
}

export default withRouter(Main)