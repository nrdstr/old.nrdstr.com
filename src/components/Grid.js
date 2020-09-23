import React from 'react'
import GridItem from './GridItem'
import { useStateValue } from '../state'

const Grid = props => {
    const [{ toggle }] = useStateValue()
    const currentTab = toggle[props.type].current

    if (props.data[currentTab]) {
        return (
            <div className='grid animate--fade-in'>
                { props.data[currentTab].map((item, i) => <GridItem key={item} src={item} type={props.type} index={i} id={item} tab={currentTab} />)}
            </div>
        )
    } else {
        return <p className='grid__placeholder'>coming soon</p>
    }
}

export default Grid



