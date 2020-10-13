import React from 'react'
import Logo from './Logo'
import Socials from './Socials'

const About = props => {

    return (
        <div className='about animate--fade-in'>
            <div className='desktop'>
                <Logo />
            </div>
            <div className='about__description'>
                <h2 className='about__title bg--pink'>our story</h2>
                <p>
                    we are a group of graphic, ui, and web designers based in the united states offering services ranging from <button className='link' onClick={() => props.handlePageChange('portfolio', 'graphic')}> logo design</button> to <button className='link' onClick={() => props.handlePageChange('portfolio', 'web')}>website development</button>. we enjoy good challenges to help push our creative limits further every day.
                                </p>
                <p style={{ marginTop: 20 }}>
                    check out our <button className='link' onClick={() => props.handlePageChange('services')}>services</button> page for more information. we'd be delighted to make your next project a <strong>nrdstr</strong> project!
                                </p>
            </div>
            <Socials />
        </div>
    )
}

export default About