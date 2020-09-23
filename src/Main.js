import React, { useState, useEffect, useRef } from 'react'
import { useStateValue } from './state'
import Logo from './components/Logo'
import Socials from './components/Socials'
import Grid from './components/Grid'
import Loader from './components/Loader'
import { withRouter } from "react-router-dom"
import GridNav from './components/GridNav'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const Main = props => {
    const [{ page, init, data, toggle, loading, shapesLoading }, dispatch] = useStateValue()
    const [contentStyles, setContentStyles] = useState({ opacity: 1 })
    const [mainStyles, setMainStyles] = useState({ opacity: 0 })
    const [homeStyles, setHomeStyles] = useState({ opacity: 0 })
    const [initAnimation, setInitAnimation] = useState('main--init')
    const content = useRef(null)
    const main = useRef(null)
    const home = useRef(null)

    const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID)

    let path = props.history.location.pathname.substr(1, props.history.location.pathname.length).split('/')

    const importAll = r => r.keys().map(r)

    const handleGetImages = () => {
        const logos = importAll(require.context('./site-media/site-logos', false, /\.(png|jpe?g|svg)$/))
        const graphics = importAll(require.context('./site-media/site-graphics', false, /\.(png|jpe?g|svg)$/))
        dispatch({
            type: 'data',
            payload: {
                ...data,
                media: {
                    ...data.media,
                    logos: logos,
                    graphics: graphics
                }
            }
        })

        setTimeout(() => {
            dispatch({
                type: 'loading',
                payload: false
            })
        }, 1500)
    }

    // const handleGoogleSheets = async () => {
    //     try {
    //         await doc.useServiceAccountAuth({
    //             client_email: process.env.REACT_APP_CLIENT_EMAIL,
    //             private_key: process.env.REACT_APP_PRIVATE_KEY
    //         })

    //         await doc.loadInfo()

    //         const logosSheet = doc.sheetsById[process.env.REACT_APP_LOGOS_SHEET_ID]
    //         const graphicsSheet = doc.sheetsById[process.env.REACT_APP_GRAPHICS_SHEET_ID]
    //         const graphicsRows = await graphicsSheet.getRows()
    //         const logoRows = await logosSheet.getRows()
    //         let logoIds = []
    //         let graphicIds = []

    //         for (let i = 0; i < logoRows.length; i++) {
    //             logoIds.push(logoRows[i].id)
    //         }

    //         for (let i = 0; i < graphicsRows.length; i++) {
    //             graphicIds.push(graphicsRows[i].id)
    //         }
    //         dispatch({
    //             type: 'data',
    //             payload: {
    //                 ...data,
    //                 media: {
    //                     ...data.media,
    //                     // logos: logoIds.reverse(),
    //                     // graphics: graphicIds.reverse()
    //                 }
    //             }
    //         })

    //         dispatch({
    //             type: 'loading',
    //             payload: false
    //         })


    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

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

            dispatch({
                type: 'shapesLoading',
                payload: {
                    page: path[1],
                    toggled: true
                }
            })
        }

        if (path[2] && path[0] === 'media') {
            const index = path[2]
            dispatch({
                type: 'toggle',
                payload: {
                    ...toggle,
                    [page]: {
                        current: path[1]
                    }
                }
            })

            if (!shapesLoading.toggled) {
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

        // main.current.style.opacity = 1
    }

    useEffect(() => {
        if (Object.keys(data).length === 0) handleGetImages()

        if (!loading) {

            if (path.length === 1 && path[0] === "") {

                if (!shapesLoading.toggled) {
                    setTimeout(() => {
                        setHomeStyles({ opacity: 1 })
                        setMainStyles({ opacity: 1 })
                    }, 500)
                }
            } else {
                dispatch({ type: 'init', payload: false })
                dispatch({
                    type: 'page',
                    payload: path[0]
                })

                if (!shapesLoading.toggled) {
                    setTimeout(() => {
                        // setContentStyles({ opacity: 1 })
                        setMainStyles({ opacity: 1 })
                    }, 500)
                }

                handlePath()
            }
        }
    }, [page, loading, shapesLoading.toggled])


    if (!loading) {
        if (page === 'home') {
            return (
                <main ref={main} style={mainStyles} className={`main main__content main__home`}>
                    <div ref={home} style={homeStyles} className={`home`}>
                        <Logo />
                        <Socials />
                    </div>
                </main>
            )
        } else if (page === 'media') {
            return (
                <main style={mainStyles} className={`main main__content color-1}`}>
                    <div style={contentStyles} ref={content} className={`content color-2`}>
                        <h1 className='bg--blue'>media</h1>
                        <GridNav type={'media'} tabs={['logos', 'graphics', 'video']} />
                        <Grid type={'media'} data={data.media} />
                    </div>
                </main>
            )
        } else if (page === 'web') {
            return (
                <main style={mainStyles} className={`main main__content color-3`}>
                    <div style={contentStyles} ref={content} className={`content color-1`}>
                        <h1 className='bg--purple'>web</h1>
                    </div>
                </main>
            )
        } else if (page === 'music') {
            return (
                <main style={mainStyles} className={`main main__content color-4`}>
                    <div style={contentStyles} ref={content} className={`content color-3`}>
                        <h1 className='bg--yellow'>music</h1>
                    </div>
                </main>
            )
        } else if (page === 'contact') {
            return (
                <main style={mainStyles} className={`main main__content color-2`}>
                    <div style={contentStyles} ref={content} className={`content color-3`}>
                        <h1 className='bg--pink'>contact</h1>
                    </div>
                </main>
            )
        } else {
            return (
                <main style={mainStyles} className={`main main__content main--error color-2`}>
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