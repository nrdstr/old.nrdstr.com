import React, { useEffect } from 'react'
import { useStateValue } from "./state"
import { createSequence } from './utils'


const Background = props => {
    const [{ shapesData, page, init }, dispatch] = useStateValue()

    const numberOfShapes = Math.floor(Math.random() * (window.innerWidth / 30 - 50) + 50)
    const shapes = ['square', 'circle', 'half-circle', 'zig-zag', 'triangle']
    const colors = ['color-1', 'color-2', 'color-3', 'color-4']

    // const createSequence = (numb) => Array.from(new Array(numb), (val, index) => index + 1)

    const initShapes = () => {
        const data = createSequence(numberOfShapes)
        const shapesArr = []
        data.forEach(shape => {
            shapesArr.push({
                class: `shape ${shapes[Math.floor(Math.random() * shapes.length)]} ${colors[Math.floor(Math.random() * colors.length)]}`,
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
        clearInterval(handleAnimation)
    }

    const randNum = (min, max) => {
        let step1 = max - min + 1
        let step2 = Math.random() * step1
        let result = Math.floor(step2) + min
        return result
    }

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
    //     props.changeColor(colors[randNum(0, colors.length)])
    //     clearInterval(handleAnimation)
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

    const handleAnimation = () => {
        const rand = Math.floor(Math.random() * numberOfShapes - 1)
        const el = document.querySelector(`#shape-${rand}`)
        if (el && el.classList) {
            el.classList.add('animate--jump')
            setTimeout(() => {
                el.classList.remove('animate--jump')
            }, 233)
        }
    }

    useEffect(() => {
        if (init) {
            initShapes()
            setInterval(handleAnimation, 466)
            console.log('ran')
        }
        if (page === 'home' && !init) repositionShapes('home')
        if (page === 'graphics') repositionShapes('graphics')
        if (page === 'web') repositionShapes('web')
        if (page === 'contact') repositionShapes('contact')
    }, [init, page])

    if (shapesData) {
        return (
            <div className='background'>
                {
                    shapesData && shapesData.map((shape, i) => {
                        return (
                            <div key={i} className='shape-container' style={shape.style}>
                                <div id={`shape-${i}`} className={shape.class} />
                            </div>
                        )
                    })
                }
                {/* <button className='btn' onClick={repositionShapes}>LETS GOOOOO</button> */}
            </div>
        )
    } else {
        return 'LOADING...'
    }
}

export default Background