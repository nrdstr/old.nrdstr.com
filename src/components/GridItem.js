import React from 'react'
import { useStateValue } from '../state'
import { withRouter } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const GridItem = props => {

    const [{ toggle, page }, dispatch] = useStateValue()

    const handleClick = () => {
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                modal: {
                    toggled: true,
                    id: props.id,
                    index: props.index,
                    tab: props.tab,
                    type: props.type
                }
            }
        })
        props.history.push(`/${page}/${props.tab}/${props.index}`)
    }

    return (
        <div className='grid-item'>
            <img
                onClick={handleClick}
                className='grid__item'
                // effect='blur'
                src={props.src} />
        </div>
    )
}

export default withRouter(GridItem)