import React from 'react'

const Background = () => {

    const createSequence = (numb) => {
        return Array.from(new Array(numb), (val, index) => index + 1);
    }

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const numberOfShapes = Math.floor(Math.random() * (screenWidth / 10 - 50) + 50)
    const numberOfShapesArray = createSequence(numberOfShapes)
    const shapes = ['square', 'circle', 'half-circle', 'zig-zag', 'triangle']
    const colors = ['color-1', 'color-2', 'color-3', 'color-4']

    // numberOfShapesArray.forEach(() => {
    //     const shapeContainer = document.createElement('div')
    //     shapeContainer.classList.add('shape-container')
    //     shapeContainer.setAttribute('style', `top: ${Math.ceil(Math.floor(Math.random() * (screenHeight)) / 50) * 50}px left: ${Math.ceil(Math.floor(Math.random() * (screenWidth)) / 50) * 50}px transform: rotate(${Math.floor(Math.random() * (360))}deg)`)
    //     const shape = document.createElement("div")
    //     shape.classList.add(shapes[Math.floor(Math.random() * shapes.length)])
    //     shape.classList.add(colors[Math.floor(Math.random() * colors.length)])
    //     shapeContainer.append(shape)
    //     // document.querySelector(targetClass).append(shapeContainer)
    // })

    // const shit = numberOfShapesArray.forEach(() => {
    //     const shapeContainer = document.createElement('div')
    //     shapeContainer.classList.add('shape-container')
    //     shapeContainer.setAttribute('style', `top: ${Math.ceil(Math.floor(Math.random() * (screenHeight)) / 50) * 50}px left: ${Math.ceil(Math.floor(Math.random() * (screenWidth)) / 50) * 50}px transform: rotate(${Math.floor(Math.random() * (360))}deg)`)
    //     const shape = document.createElement("div")
    //     shape.classList.add(shapes[Math.floor(Math.random() * shapes.length)])
    //     shape.classList.add(colors[Math.floor(Math.random() * colors.length)])
    //     shapeContainer.append(shape)
    //     return shapeContainer
    // })

    return (
        <div className='background'>
            {
                numberOfShapesArray.map(shape => {
                    const shapeStyle = {
                        top: Math.ceil(Math.floor(Math.random() * (screenHeight)) / 50) * 50,
                        left: Math.ceil(Math.floor(Math.random() * (screenWidth)) / 50) * 50,
                        transform: `rotate(${Math.floor(Math.random() * (360))}deg)`
                    }

                    return (
                        <div className='shape=container' style={shapeStyle}>
                            <div className={`${shapes[Math.floor(Math.random() * shapes.length)]} ${colors[Math.floor(Math.random() * colors.length)]}`} />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Background