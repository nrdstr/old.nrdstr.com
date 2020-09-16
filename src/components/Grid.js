import React from 'react'
import GridItem from './GridItem'
import { useStateValue } from '../state'

const Grid = props => {
    const [{ toggle }] = useStateValue()


    const currentTab = toggle[props.type].current

    return (
        <div className='grid'>
            { props.data[currentTab].map((item, i) => <GridItem key={i} data={item} />)}
        </div>
    )
}

export default Grid