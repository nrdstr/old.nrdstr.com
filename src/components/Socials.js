import React from 'react'
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from '../icons/icons'

const Socials = () => {
    return (
        <ul className='socials'>
            <li><a href='#'><Instagram /></a></li>
            <li><a href='#'><Twitter /></a></li>
            <li><a href='#'><Facebook /></a></li>
            <li><a href='#'><Youtube /></a></li>
            {/* <li><a href='#'><Linkedin /></a></li> */}
        </ul>
    )
}

export default Socials