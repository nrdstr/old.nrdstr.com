import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from '../state'
import YouTube from 'react-youtube-embed'
import { withRouter } from 'react-router-dom'

const Modal = props => {
    const [{ toggle, page, data }, dispatch] = useStateValue()
    const [ids, setIds] = useState([])
    const [content, setContent] = useState()
    const modal = useRef(null)

    const handleCloseModal = () => {
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                modal: {
                    toggled: false,
                    index: null,
                    id: '',
                    type: '',
                    tab: ''
                }
            }
        })
        props.history.push(`/${page}/${toggle.modal.tab}`)
    }

    const handleNext = () => {
        let index = toggle.modal.index
        if (index <= ids.length - 2) {
            index++
        } else {
            index = 0
        }

        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                modal: {
                    ...toggle.modal,
                    toggled: true,
                    index: index,
                    id: ids[index]
                }
            }
        })
        props.history.push(`/${page}/${toggle.modal.tab}/${index}`)
    }

    const handlePrevious = () => {
        let index = toggle.modal.index
        if (index <= 0) {
            index = ids.length - 1
        } else {
            index--
        }

        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                modal: {
                    ...toggle.modal,
                    toggled: true,
                    index: index,
                    id: ids[index]
                }
            }
        })
        props.history.push(`/${page}/${toggle.modal.tab}/${index}`)
    }


    const Graphic = () => {
        const dataPage = data[page]
        const dataTab = dataPage[toggle.modal.tab]
        return (
            <div className='modal__content-container'>
                <img
                    className='modal__image animate--fade-in-fast'
                    src={dataTab[toggle.modal.index]} />
            </div>
        )
    }

    const Motion = () => {
        const { motion } = data
        return (
            <div className='modal__content-container'>
                <div className='video-responsive'>
                    <YouTube id={motion[toggle.modal.index].snippet.resourceId.videoId} />
                </div>
            </div>
        )
    }

    const handleContent = () => {
        const tab = toggle.modal.tab

        if (tab === 'graphic') {
            setContent(<Graphic />)
        } else if (tab === 'motion') {
            setContent(<Motion />)
        } else {
            return 'Loading...'
        }


    }


    useEffect(() => {
        if (toggle.modal.toggled) {
            const dataPage = data[page]
            const dataTab = dataPage[toggle[page].current]
            setIds(dataTab)
            modal.current.style.display = 'flex'
            setTimeout(() => {
                modal.current.style.opacity = 1
            }, 10)
            handleContent()
        } else {
            modal.current.style.opacity = 0
            setTimeout(() => {
                modal.current.style.display = 'none'
            }, 200)
        }
    }, [toggle.modal])


    return (
        <div ref={modal} className={`modal`}>
            <div className='modal__top-bar'>
                <button onClick={handleCloseModal} className='modal__close' />
            </div>
            <div className='modal__inner'>
                <div className='modal__btn-container modal__btn-container--full'>
                    <button onClick={handlePrevious} className='modal__btn modal__btn--prev' />
                </div>

                {content}

                <div className='modal__btn-container modal__btn-container--full flex-end'>
                    <button onClick={handleNext} className='modal__btn' />
                </div>

                <div className='modal__mobile-btns'>
                    <div className='modal__btn-container'>
                        <button onClick={handlePrevious} className='modal__btn modal__btn--prev' />
                    </div>
                    <div className='modal__btn-container'>
                        <button onClick={handleNext} className='modal__btn' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default withRouter(Modal)