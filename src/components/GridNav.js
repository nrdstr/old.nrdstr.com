import React from 'react'
import { useStateValue } from '../state/'

const GridNav = props => {
    const [{ toggle }, dispatch] = useStateValue()

    const handleGridNav = type => {
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                [props.type]: {
                    current: type
                }
            }
        })
    }

    return (
        <div className='grid-nav'>
            {
                props.tabs.map(tab => {
                    return (
                        <button key={tab}
                            onClick={() => handleGridNav(tab)}
                            className={`grid-nav__btn ${tab === toggle[props.type].current && 'grid-nav__btn--active'}`}>
                            {tab}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default GridNav