import React from 'react'
import { Instagram, Twitter, Youtube } from '../icons/icons'

const Socials = () => {
    return (
        <ul className='socials animate--fade-in'>
            <li><a href='https://www.instagram.com/nrdstr_/'><Instagram /></a></li>
            <li><a href='https://twitter.com/nrdstr_'><Twitter /></a></li>
            {/* <li><a href='#'><Facebook /></a></li> */}
            <li><a href='https://www.youtube.com/channel/UC-vQ0EMVGGOcSIw781MYOTg'><Youtube /></a></li>
        </ul>
    )
}

export default Socials