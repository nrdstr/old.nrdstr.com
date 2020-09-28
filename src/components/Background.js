import React, { useEffect, useRef } from 'react'
import { createSequence } from '../utils'
import { useStateValue } from "../state"
import Loader from './Loader'


const Background = () => {
    const [{ shapesData, shapesLoading, page, init, loading }, dispatch] = useStateValue()
    const background = useRef(null)
    const numberOfShapes = Math.floor(Math.random() * (window.innerWidth / 30 - 50) + 50)
    const shapes = ['square', 'circle', 'half-circle', 'zig-zag', 'triangle']
    const colors = ['color-1', 'color-2', 'color-3', 'color-4']

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

    const handleShapeLoader = (page, toggle) => {
        dispatch({
            type: 'shapesLoading',
            payload: {
                page: page,
                toggled: toggle
            }
        })
    }

    const repositionShapes = page => {
        const shapesArr = []
        const colors = ['color-1', 'color-2', 'color-3', 'color-4']
        shapesData.forEach((shape, i) => {
            let shapeClass = (shapesData[i].class).trim().split(' ')
            shapeClass.pop()
            let color
            if (page === 'portfolio') {
                color = 'color-2'
            } else if (page === 'services') {
                color = 'color-1'
            } else if (page === 'contact') {
                color = 'color-4'
            } else if (page === 'about') {
                color = 'color-3'
            } else {
                color = colors[Math.floor(Math.random() * colors.length)]
            }

            shapesArr.push({
                class: `${shapeClass.join(' ')} ${color}`,
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
        handleShapeLoader(page, false)
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
        if (!loading) {
            if (init) {
                initShapes()
                setTimeout(() => {
                    background.current.style.opacity = 1
                    initShapes()
                    handleShapeLoader(page, false)
                }, 50)
            }
            if (shapesLoading.toggled) {
                if (shapesLoading.page === 'home' && !init) repositionShapes('home')
                if (shapesLoading.page === 'portfolio') repositionShapes('portfolio')
                if (shapesLoading.page === 'services') repositionShapes('services')
                if (shapesLoading.page === 'about') repositionShapes('about')
                if (shapesLoading.page === 'contact') repositionShapes('contact')
            }
        }
    }, [init, page, loading, shapesLoading.toggled])

    if (shapesData) {
        return (
            <div ref={background} className='background'>
                {
                    shapesData && shapesData.map((shape, i) => {
                        return (
                            <div key={i} className='shape__container' style={shape.style}>
                                <div id={`shape-${i}`} className={shape.class} />
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return <Loader />
    }
}

export default Background