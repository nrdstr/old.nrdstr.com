import React from 'react'

const Card = props => {

    return (
        <div className='services__grid-item'>
            <div className='services__grid-item-header'>
                <h3>graphic design</h3>
                <div className='shape__container services__shape'>
                    <div className='shape zig-zag divider' />
                    <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                </div>
            </div>
            <div className='services__grid-item-content'>
                <p>unique designs for <strong>any</strong>&nbsp;project.</p>
                <ul className='services__content'>
                    <li>logos</li>
                    <li>branding</li>
                    <li>custom packaging</li>
                    <li><strong>plenty</strong>&nbsp;more.</li>
                </ul>
                <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                    get started
                </button>
            </div>
        </div>
    )

}

export default Card