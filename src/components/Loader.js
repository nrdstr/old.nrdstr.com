import React from 'react'
import { NrdstrIcon } from '../icons/icons'

const Loader = () => {
    return (
        <div className="loader-container">
            <svg className='loader-circle' version="1.1" x="0" y="0" width="150px" height="150px" viewBox="-10 -10 120 120" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                <path
                    className="circle"
                    d="M0,50 A50,50,0 1 1 100,50 A50,50,0 1 1 0,50"
                />
            </svg>
            <div className='loader-logo'>
                <NrdstrIcon />
            </div>

            {/* <div className="item item-1"><NrdstrIcon /></div>
            <div className="item item-2"><NrdstrIcon /></div>
            <div className="item item-3"><NrdstrIcon /></div>
            <div className="item item-4"><NrdstrIcon /></div> */}
        </div>
    )
}

export default Loader