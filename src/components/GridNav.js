import React from 'react'
import { useStateValue } from '../state/'
import { withRouter } from 'react-router-dom'

const GridNav = props => {
    const [{ toggle, page }, dispatch] = useStateValue()

    const handleGridNav = type => {
        props.history.push(`/${page}/${type}`)
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                [page]: {
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

export default withRouter(GridNav)