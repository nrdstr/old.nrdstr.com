import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from "react-router-dom"
import Socials from './components/Socials'
import GridNav from './components/GridNav'
import Loader from './components/Loader'
import Contact from './components/Contact'
import About from './components/About'
import { useStateValue } from './state'
import Services from './components/Services'
import Logo from './components/Logo'
import Grid from './components/Grid'
import Footer from './components/Footer'
import Seo from "./components/seo"

const Main = props => {
    const [{ page, data, toggle, loading, shapesLoading }, dispatch] = useStateValue()
    const [mainStyles, setMainStyles] = useState({ opacity: 0 })
    const [homeStyles, setHomeStyles] = useState({ opacity: 0 })
    const main = useRef(null)
    const home = useRef(null)


    let path = props.history.location.pathname.substr(1, props.history.location.pathname.length).split('/')



    const importAll = r => r.keys().map(r)

    const getYoutubePlaylist = async () => {
        const motionGridArr = []
        let youtubeRes = {}
        try {
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
        const graphicSmall = importAll(require.context('./site-media/site-graphic-500', false, /\.(png|jpe?g|svg)$/))
        const yt = await getYoutubePlaylist()

        const webData = [
            {
                name: 'drafty',
                url: 'drafty.cc',
                tags: ['webapp', 'custom', 'reactjs', 'twitter'],
                src: '/site-web/drafty.jpg',
                description: 'drafty is a web app designed to help you write and store short-form content such as tweets. this webapp was created for a twitter user looking to expand on twitter\'s post draft functionality. <br /><br />drafty was built using modern tooling such as <strong>reactjs</strong>,<strong> sass</strong>, and <strong>google firebase</strong>.'
            },
            {
                name: 'cleveland clock repair',
                url: 'clevelandclockrepair.com',
                tags: ['re-design', 'small business', 'reactjs'],
                src: '/site-web/clevelandclockrepair.jpg',
                description: 'cleveland clock repair performs clock servicing and repairs to clients in the greater cleveland, ohio area. this was a fun build and the folks at cleveland are beyond excited! <br /><br /> we used <strong>gatsby</strong> and <strong>reactjs</strong> to make this site super fast, snappy, and SEO strong.'
            },
            {
                name: 'wigb',
                url: 'wigb.space',
                tags: ['new site', 'artist', 'music'],
                src: '/site-web/wigb.jpg',
                description: 'wigb is an "Auricular Oneirologist" based out of "new rose city". we built this site to use a simple landing page with particles.js, with a shop link that leads to a custom store built on wordpress. check out his site and sick music today!'
            }

        ]

        dispatch({
            type: 'data',
            payload: {
                ...data,
                portfolio: {
                    ...data.portfolio,
                    graphic: graphic,
                    graphicSmall: graphicSmall,
                    motion: yt.motionGrid,
                    web: webData
                },
                motion: yt.motionVids,
                web: webData
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            dispatch({ type: 'shapesLoading', payload: { page: page, toggled: true } })
            props.history.push(page)
        }

    }




    if (!loading) {
        if (page === 'home') {
            return (
                <main ref={main} style={mainStyles} className={`main main__content main__home`}>
                    <Seo title='graphic design, web design and development, web maintenance, and more' />
                    <div ref={home} style={homeStyles} className={`home`}>
                        <Logo color={'#fefefe'} />
                        <p className='home__description animate--fade-in'>
                            we are a <strong>digital design</strong> agency that delivers graphic design, web design and development, advertising design, and many more <button className='link' onClick={() => handlePageChange('services')}>services</button>.
                            </p>
                        {/* <p className='home__description animate--fade-in'>
                            contact us <strong>today</strong> to discuss your next web, creative, or marketing project.
                            at <strong>nrdstr</strong>, we are heavily driven by the world of music, film, and entertainment.
                        </p> */}
                        <button className='home__cta-btn' onClick={() => handlePageChange('contact')} title='see our available services'>
                            get a quote
                        </button>
                        <Socials />
                    </div>
                    <Footer />
                </main>
            )
        } else if (page === 'portfolio') {
            return (
                <main style={mainStyles} className={`main main__content color-1`}>
                    <Seo title='digital design portfolio' description="Check out our portfolio of work with graphic design, web design and development, and motion design. Contact us today to discuss your next web, creative, or marketing project!" />
                    <div className={`content color-2`}>
                        {/* <h1 className='bg--blue desktop'>portfolio</h1> */}
                        <GridNav type={'portfolio'} tabs={['graphic', 'motion', 'web']} />
                        <Grid type={'portfolio'} data={data.portfolio} />
                    </div>
                </main>
            )
        } else if (page === 'services') {
            return (
                <main style={mainStyles} className={`main main__content color-3`}>
                    <Seo title='our digital services' description="We offer a plethora of digital services, such as web design and development, graphic design, website maintenance and hosting, youtube videos, social media, design, and much more. Contact us today to discuss your next web, creative, or marketing project!" />
                    <div className={`content color-1`}>
                        {/* <h1 className='bg--purple desktop'>services</h1> */}
                        <Services handlePageChange={handlePageChange} />
                    </div>
                </main>
            )
        } else if (page === 'about') {
            return (
                <main style={mainStyles} className={`main main__content color-4`}>
                    <Seo title='the nrdstr story' description="We are a group of graphic, ui, and web designers based in the united states offering services ranging from logo design to website development. Contact us today to discuss your next web, creative, or marketing project!" />
                    <div className={`content color-3`}>
                        <About handlePageChange={handlePageChange} />
                    </div>
                    <Footer />
                </main>
            )
        } else if (page === 'contact') {
            return (
                <main style={mainStyles} className={`main main__content main__content--scroll color-2`}>
                    <Seo title='contact us' description="Ready to move forward on your next digital project? We offer graphic design services, web design services, and so much more. Let's make your next project a nrdstr project. Contact us today!" />
                    <div className={`content color-3`}>
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
