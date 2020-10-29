import React from 'react'
import GridItem from './GridItem'
import { useStateValue } from '../state'

const Grid = props => {
    const [{ toggle }] = useStateValue()
    const currentTab = toggle[props.type].current

    if (props.data[currentTab]) {
        const d = props.data[currentTab]
        return (
            <div className={`grid grid--${currentTab} animate--fade-in`}>
                { d.map((item, i) => {
                    if (currentTab === 'web') {
                        return <GridItem key={i}
                            src={item.src}
                            type={props.type}
                            index={i}
                            id={item.src}
                            tab={currentTab} />
                    } else {
                        return <GridItem key={i}
                            src={item}
                            type={props.type}
                            index={i}
                            id={item}
                            tab={currentTab} />
                    }
                })}
            </div>
        )
    } else {
        return <p className='grid__placeholder'>coming soon</p>
    }
}

export default Grid



