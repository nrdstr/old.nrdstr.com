import React from 'react'
import { NrdstrIcon } from '../icons/icons'

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="item item-1"><NrdstrIcon /></div>
            <div className="item item-2"><NrdstrIcon /></div>
            <div className="item item-3"><NrdstrIcon /></div>
            <div className="item item-4"><NrdstrIcon /></div>
        </div>
    )
}

export default Loader