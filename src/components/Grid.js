import React from 'react'
import GridItem from './GridItem'
import { useStateValue } from '../state'

const Grid = props => {
    const [{ toggle }] = useStateValue()
    const currentTab = toggle[props.type].current

    console.log(toggle)

    if (props.data[currentTab]) {
        return (
            <div className='grid'>
                { props.data[currentTab].map((item, i) => <GridItem key={item} type={props.type} index={i} id={item} tab={currentTab} />)}
            </div>
        )
    } else {
        return 'LOADING...'
    }
}

export default Grid



