import React from 'react'
import { useStateValue } from '../state'
import { withRouter } from 'react-router-dom'
import { NrdstrIcon, ExpandIcon } from '../icons/icons'
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
        if (props.type) {
            props.history.push(`/${page}/${props.tab}/${props.index}`)
        } else {
            props.history.push(`/${page}/${props.index}`)
        }
    }

    return (
        <div className={`grid-item grid-item--${props.tab}`} onClick={handleClick}>
            <div className='grid-item__placeholder'>
                <NrdstrIcon />
            </div>
            <div className='grid-item__hover'>
                <ExpandIcon />
            </div>
            <img
                className='grid__img animate--fade-in-fast'
                alt='portfolio item'
                src={props.src} />
        </div>
    )
}

export default withRouter(GridItem)