import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from '../state'
import { withRouter } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Modal = props => {
    const [{ toggle, page, data }, dispatch] = useStateValue()
    const [ids, setIds] = useState([])
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

    useEffect(() => {
        if (toggle.modal.toggled) {
            const dataPage = data[page]
            const dataTab = dataPage[toggle[page].current]
            setIds(dataTab)
            modal.current.style.display = 'flex'
            setTimeout(() => {
                modal.current.style.opacity = 1
            }, 10)
        } else {
            modal.current.style.opacity = 0
            setTimeout(() => {
                modal.current.style.display = 'none'
            }, 200)
        }
    }, [toggle.modal])

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
        props.history.push(`/${page}/${toggle.modal.tab}/${ids[index]}`)
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
        props.history.push(`/${page}/${toggle.modal.tab}/${ids[index]}`)
    }


    const Image = () => {
        return (
            <div className='modal__image-container'>
                <img
                    className='modal__image'
                    src={`https://drive.google.com/uc?id=${ids[toggle.modal.index]}`} />
            </div>
        )
    }

    return (
        <div ref={modal} className={`modal`}>
            <div className='modal__top-bar'>
                <button onClick={handleCloseModal} className='modal__close' />
            </div>
            <div className='modal__inner'>
                <div className='modal__btn-container'>
                    <button onClick={handlePrevious} className='modal__btn modal__btn--prev' />
                </div>

                {toggle.modal.id ? <Image /> : 'Loading...'}
                <div className='modal__btn-container'>
                    <button onClick={handleNext} className='modal__btn' />
                </div>


            </div>
        </div>
    )
}

export default withRouter(Modal)