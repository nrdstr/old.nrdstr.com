import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from "react-router-dom"
import Socials from './components/Socials'
import GridNav from './components/GridNav'
import Loader from './components/Loader'
import Contact from './components/Contact'
import About from './components/About'
import { useStateValue } from './state'
import Logo from './components/Logo'
import { NrdstrContactIcon } from './icons/icons'
import Grid from './components/Grid'

const Main = props => {
    const [{ page, data, toggle, loading, shapesLoading }, dispatch] = useStateValue()
    const [mainStyles, setMainStyles] = useState({ opacity: 0 })
    const [homeStyles, setHomeStyles] = useState({ opacity: 0 })
    const main = useRef(null)
    const home = useRef(null)

    const name = useRef(null)
    const email = useRef(null)
    const subject = useRef(null)
    const message = useRef(null)

    const [isDisabled, setDisabled] = useState(true)

    let path = props.history.location.pathname.substr(1, props.history.location.pathname.length).split('/')



    const importAll = r => r.keys().map(r)

    const getYoutubePlaylist = async () => {
        const motionGridArr = []
        let youtubeRes = {}
        try {
            const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=PLKArVTG2TtWqEIdAhpIUes8T3ga8OCk-F&key=${process.env.REACT_APP_YOUTUBE_KEY}`
            const youtube = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLKArVTG2TtWqEIdAhpIUes8T3ga8OCk-F&key=${process.env.REACT_APP_YOUTUBE_KEY}`),
                youtubeData = await youtube.json(),
                youtubePlaylist = await youtubeData.items

            await youtubePlaylist.forEach(item => {
                motionGridArr.push(item.snippet.thumbnails.standard.url)
            })

            youtubeRes = {
                motionGrid: motionGridArr,
                motionVids: youtubePlaylist
            }
        } catch (e) {
            console.error(e)
        }

        return youtubeRes
    }

    const getData = async () => {
        const graphic = importAll(require.context('./site-media/site-graphic', false, /\.(png|jpe?g|svg)$/))
        const web = importAll(require.context('./site-media/site-web', false, /\.(png|jpe?g|svg)$/))
        const webArr = []
        const yt = await getYoutubePlaylist()

        // this data will go in the api or something
        const webData = {
            name: 'wigb',
            url: 'wigb.space',
            tags: ['new site', 'artist'],
            src: web[0],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }

        webArr.push(webData)

        dispatch({
            type: 'data',
            payload: {
                ...data,
                portfolio: {
                    ...data.portfolio,
                    graphic: graphic,
                    motion: yt.motionGrid,
                    web: web
                },
                motion: yt.motionVids,
                web: webArr
            }
        })

        setTimeout(() => {
            dispatch({
                type: 'loading',
                payload: false
            })
        }, 1500)
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

            dispatch({
                type: 'shapesLoading',
                payload: {
                    page: path[1],
                    toggled: true
                }
            })
        }

        if (path[2] && path[0] === 'portfolio') {
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
    }

    useEffect(() => {
        if (Object.keys(data).length === 0) getData()

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
                dispatch({ type: 'page', payload: path[0] })

                if (!shapesLoading.toggled) {
                    setTimeout(() => {
                        setMainStyles({ opacity: 1 })
                    }, 500)
                }

                handlePath()
            }
        }
    }, [page, loading, shapesLoading.toggled])

    const handlePageChange = (page, tab) => {
        dispatch({ type: 'page', payload: page })
        if (tab) {
            dispatch({
                type: 'toggle',
                payload: {
                    ...toggle,
                    [page]: {
                        current: tab
                    }
                }
            })
            props.history.push(`${page}/${tab}`)
        } else {
            props.history.push(page)
        }

    }

    const handleFormSubmit = e => {
        e.preventDefault()
        let sub = 'message from nrdstr.com'

        if (subject.current.value) {
            sub = `${subject.current.value} - ${sub}`
        }
        const msg = {
            name: name.current.value,
            email: email.current.value,
            subject: sub,
            message: message.current.value
        }

        console.log(msg)
    }

    if (!loading) {
        if (page === 'home') {
            return (
                <main ref={main} style={mainStyles} className={`main main__content main__home`}>
                    <div ref={home} style={homeStyles} className={`home`}>
                        <Logo />
                        <p className='home__description animate--fade-in'>
                            a <strong>multimedia design</strong> collective. driven by the world of music, entertainment, and culture.
                        </p>
                        <Socials />
                    </div>
                </main>
            )
        } else if (page === 'portfolio') {
            return (
                <main style={mainStyles} className={`main main__content color-1`}>
                    <div className={`content color-2`}>
                        <h1 className='bg--blue desktop'>portfolio</h1>
                        <GridNav type={'portfolio'} tabs={['graphic', 'motion', 'web']} />
                        <Grid type={'portfolio'} data={data.portfolio} />
                    </div>
                </main>
            )
        } else if (page === 'services') {
            return (
                <main style={mainStyles} className={`main main__content color-3`}>
                    <div className={`content color-1`}>
                        <h1 className='bg--purple desktop'>services</h1>
                        <div className='services'>
                            <div style={{ opacity: 0 }} className='services__grid'>
                                <div className='services__grid-item'>
                                    <div className='services__grid-item-header'>
                                        <h3>graphic design</h3>
                                    </div>
                                    <div className='services__grid-item-content'>
                                        <p>itmem</p>
                                    </div>
                                </div>
                                <div className='services__grid-item'>
                                    <div className='services__grid-item-header'>
                                        <h3>web design</h3>
                                    </div>
                                    <div className='services__grid-item-content'>
                                        <p>itmem</p>
                                    </div>
                                </div>
                                <div className='services__grid-item'>
                                    <div className='services__grid-item-header'>
                                        <h3>video production</h3>
                                    </div>
                                    <div className='services__grid-item-content'>
                                        <p>itmem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        } else if (page === 'about') {
            return (
                <main style={mainStyles} className={`main main__content color-4`}>
                    <div className={`content color-3`}>
                        <h1 className='bg--yellow desktop'>about</h1>
                        <About handlePageChange={handlePageChange} />
                    </div>
                </main>
            )
        } else if (page === 'contact') {
            return (
                <main style={mainStyles} className={`main main__content color-2`}>
                    <div className={`content color-3`}>
                        <h1 style={{ zIndex: 20 }} className='bg--pink desktop'>contact</h1>
                        <Contact />
                    </div>
                </main>
            )
        } else {
            return (
                <main style={mainStyles} className={`main main__content main--error color-2`}>
                    <div className={`content color-3`}>
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
