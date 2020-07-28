import React from 'react'
import { useStateValue } from './state'


const TopBar = props => {
    const [{ page, shapesData }, dispatch] = useStateValue()

    const repositionShapes = () => {
        const shapesArr = []
        shapesData.forEach((shape, i) => {
            shapesArr.push({
                class: shapesData[i].class,
                style: {
                    top: Math.ceil(Math.floor(Math.random() * (window.innerHeight)) / 50) * 50,
                    left: Math.ceil(Math.floor(Math.random() * (window.innerWidth)) / 50) * 50,
                    transform: `rotate(${Math.floor(Math.random() * (360))}deg)`
                }
            })
        })
        dispatch({
            type: 'shapesData',
            payload: shapesArr
        })
    }


    const handleNav = page => {
        dispatch({
            type: 'page',
            payload: page
        })
        repositionShapes()
    }

    return (
        <nav className='topbar'>
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
                    <button onClick={() => handleNav('contact')} className='btn color-4'><span>contact</span></button>
                </li>
            </ul>
        </nav>
    )
}

export default TopBar