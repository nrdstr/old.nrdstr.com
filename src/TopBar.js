import React from 'react'
import { useStateValue } from './state'


const TopBar = props => {
    const [{ page, shapesData }, dispatch] = useStateValue()

    // const repositionShapes = () => {
    //     const shapesArr = []
    //     shapesData.forEach((shape, i) => {
    //         shapesArr.push({
    //             class: shapesData[i].class,
    //             style: {
    //                 top: Math.ceil(Math.floor(Math.random() * (window.innerHeight)) / 50) * 50,
    //                 left: Math.ceil(Math.floor(Math.random() * (window.innerWidth)) / 50) * 50,
    //                 transform: `rotate(${Math.floor(Math.random() * (360))}deg)`
    //             }
    //         })
    //     })
    //     dispatch({
    //         type: 'shapesData',
    //         payload: shapesArr
    //     })
    // }

    const repositionShapes = page => {
        const shapesArr = []
        const colors = ['color-1', 'color-2', 'color-3', 'color-4']
        shapesData.forEach((shape, i) => {
            let thing = (shapesData[i].class).trim().split(' ')
            thing.pop()
            let color
            if (page === 'graphics') {
                color = 'color-2'
            } else if (page === 'web') {
                color = 'color-1'
            } else if (page === 'contact') {
                color = 'color-3'
            } else {
                color = colors[Math.floor(Math.random() * colors.length)]
            }

            console.log(color)
            shapesArr.push({
                class: `${thing.join(' ')} ${color}`,
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
        repositionShapes(page)
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