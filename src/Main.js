import React from 'react'
import { useStateValue } from './state'
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from './icons/icons'

const Main = props => {
    const [{ page }] = useStateValue()

    if (page === 'home') {
        return (
            <main className={`main main__logo color-2`}>
                <div className='logo-container'>
                    <svg className='logo' id="nrdstr." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1755.53 528.27">
                        <g id="_." dataname=".">
                            <path className="cls-1" d="M1792,1264.13v-91.29h85.8v91.29Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="r">
                            <path className="cls-1" d="M1836.64,972c.36-.35.74-.67,1.11-1a137,137,0,0,0-63.49-15.62c-30.66,0-62,13.93-85.72,34.84l-13.94-26.48h-71.08v300.37h87.81V1115c0-43.21,30.67-81.54,72.48-81.54a65.61,65.61,0,0,1,27.71,6.1A176.75,176.75,0,0,1,1836.64,972Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="t">
                            <path className="cls-1" d="M1570.44,963.76v81.54h-69.69v218.83H1415V1045.3h-65.45V963.76h62.72V852.25h88.51V963.76Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="s">
                            <path className="cls-1" d="M1122.83,1151.57c43.91,50.18,111.11,52.27,111.11,14.64,0-22.3-21.9-29.27-44.21-36.24-58.54-18.12-92.37-36.24-92.37-94.09,0-55.05,42.89-91.29,100-91.29,51.57,0,79.45,11.15,119.87,35.54l-40.42,63.42c-58.54-41.82-98.27-38.33-102.45-6.27-3.48,22.3,29.27,26.48,64.12,38.33,42.51,12.54,82.24,41.12,82.24,92.69,0,48.09-49.49,94.08-110.82,94.08-54.35,0-99.33-17.42-136.27-54.36Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="d">
                            <path className="cls-1" d="M955.93,1218.84a160,160,0,0,1-111.51,45.29c-87.82,0-158.9-71.08-158.9-159.59,0-87.81,71.08-159.6,158.9-159.6a160,160,0,0,1,111.51,45.3V735.87h82.23v527.81H955.93Zm-155.42-56.46a75.39,75.39,0,0,0,55.06,23.7,76.91,76.91,0,0,0,55.75-23.7,84.1,84.1,0,0,0,23-57.84c0-21.61-8.36-41.82-23-57.84a76.91,76.91,0,0,0-55.75-23.7,75.39,75.39,0,0,0-55.06,23.7c-14.63,16-23,36.23-23,57.84A84.15,84.15,0,0,0,800.51,1162.38Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="r-2" data-name="r">
                            <path className="cls-1" d="M700.46,972l3.85-3.74c-24.24-8.06-38.06-12.89-60.76-12.89-25.29,0-62,13.93-85.72,34.84l-13.94-26.48H472.81v300.37h87.81V1115c0-43.21,30.66-81.54,72.48-81.54a65.61,65.61,0,0,1,27.71,6.1C667.57,1015.28,684.51,986.91,700.46,972Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <g id="n">
                            <path className="cls-1" d="M207.26,990.24C231,969.33,262.32,955.4,293,955.4c80.84,0,147,71.08,147,159.59v149.14H355V1115c0-43.21-50.7-81.54-77.95-81.54-41.81,0-67,38.33-67,81.54v149.14H122.23V963.76h71.09Z" transform="translate(-122.23 -735.87)" />
                        </g>
                        <path className="cls-1" d="M1266.68,1098.65" transform="translate(-122.23 -735.87)" />
                    </svg>
                </div>
                <ul className='main__socials'>
                    <li><a href='#'><Instagram /></a></li>
                    <li><a href='#'><Twitter /></a></li>
                    <li><a href='#'><Facebook /></a></li>
                    <li><a href='#'><Youtube /></a></li>
                    <li><a href='#'><Linkedin /></a></li>
                </ul>
            </main>
        )
    } else if (page === 'graphics') {
        return (
            <main className={`main main__content color-1}`}>
                <div className='content color-2'>
                    <h1>graphics</h1>
                </div>
            </main>
        )
    } else if (page === 'web') {
        return (
            <main className={`main main__content color-3`}>
                <div className='content color-1'>
                    <h1>web</h1>
                </div>
            </main>
        )
    } else if (page === 'contact') {
        return (
            <main className={`main main__content color-4`}>
                <div className='content color-3'>
                    <h1>contact</h1>
                </div>
            </main>
        )
    } else {
        return (
            <main className={`main main__content main--error color-2`}>
                404
            </main>
        )
    }

}

export default Main