import React from 'react'

const Services = props => {

    return (
        <div className='services animate--fade-in'>
            <div className='services__grid'>
                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>graphic design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>a unique design for <strong>any</strong>&nbsp;project.</p>
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

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>website development</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>need a <strong>strong</strong> web presence? <br />we've got you.</p>
                        <ul className='services__content'>
                            <li>responsive websites</li>
                            <li><strong>seo</strong> &nbsp;friendly</li>
                            <li>modern website design</li>
                            <li>website hosting and maintenance</li>
                        </ul>
                        <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                            get started
                        </button>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>social media design</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p><strong>level up</strong>&nbsp;with a design aesthetic that spans across your social web.</p>
                        <ul className='services__content'>
                            <li>banners</li>
                            <li>custom posts</li>
                            <li>profile pictures</li>
                            <li>advertisements</li>
                        </ul>
                        <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                            get started
                        </button>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>artist branding</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>a <strong>distinctive</strong> look for your artistic project/persona.</p>
                        <ul className='services__content'>
                            <li>album artwork</li>
                            <li>logos</li>
                            <li>website design</li>
                            <li>custom videos</li>
                        </ul>
                        <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                            get started
                        </button>
                    </div>
                </div>



                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>video editing</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>solidify your digital presence with our <strong>hand tailored</strong>&nbsp;videos.</p>
                        <ul className='services__content'>
                            <li>visualizer videos</li>
                            <li>custom instagram stories</li>
                            <li>music videos</li>
                            <li><strong>plenty</strong>&nbsp;more</li>
                        </ul>
                        <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                            get started
                        </button>
                    </div>
                </div>

                <div className='services__grid-item'>
                    <div className='services__grid-item-header'>
                        <h3>advertising</h3>
                        <div className='shape__container services__shape'>
                            <div className='shape zig-zag divider' />
                            <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                        </div>
                    </div>
                    <div className='services__grid-item-content'>
                        <p>get eyes on your sponsored content with designs that <strong>pop</strong>.</p>
                        <ul className='services__content'>
                            <li>static & video ads</li>
                            <li>facebook ads</li>
                            <li>instagram ads</li>
                            <li>totally custom ads</li>
                        </ul>
                        <button onClick={() => props.handlePageChange('contact')} className='services__cta-btn'>
                            get started
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services