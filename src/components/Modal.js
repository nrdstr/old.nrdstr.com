import React, { useEffect, useRef } from 'react'
import { useStateValue } from '../state'
import { withRouter } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Modal = props => {
    const [{ toggle, page, data }, dispatch] = useStateValue()
    const modal = useRef(null)

    const handleCloseModal = () => {
        dispatch({
            type: 'toggle',
            payload: {
                ...toggle,
                modal: {
                    ...modal,
                    toggled: false,
                    id: '',
                    index: null,
                    type: ''
                }
            }
        })
        props.history.push(`/${page}/${toggle.modal.tab}`)
    }

    useEffect(() => {
        if (toggle.modal.toggled) {
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

    const modalData = data[toggle.modal.type]

    console.log(toggle.modal)

    const Image = () => {
        return (
            <div className='modal__image-container'>
                <img
                    className='modal__image'
                    src={`https://drive.google.com/uc?id=${toggle.modal.id}`} />
            </div>
        )
    }

    return (
        <div ref={modal} className={`modal`}>
            <div className='modal__top-bar'>
                <button onClick={handleCloseModal} className='modal__close' />
            </div>
            {
                toggle.modal.id ? <Image /> : 'Loading...'
            }
        </div>
    )
}

export default withRouter(Modal)