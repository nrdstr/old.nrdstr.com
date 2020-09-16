import React from 'react'

const GridItem = props => {

    return (
        <div className='grid-item'>
            <img className='grid-item__img' src={props.data.url} />
        </div>
    )
}

export default GridItem