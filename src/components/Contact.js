import React, { useState, useRef, useEffect } from 'react'
import Socials from './Socials'
import { NrdstrContactIcon } from '../icons/icons'

const Contact = () => {
    const [isDisabled, setDisabled] = useState(true)
    const name = useRef(null)
    const email = useRef(null)
    const subject = useRef(null)
    const message = useRef(null)

    const [msg, setMsg] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleFormSubmit = (e, type) => {
        e.preventDefault()
        console.log(e)
        let sub = 'message from nrdstr.com'

        if (subject.current.value) {
            sub = `${subject.current.value} - ${sub}`
        }
        const msg = {
            name: name.current.value,
            email: email.current.value,
            subject: sub,
            message: message.current.value
        }

        console.log(msg)
    }

    useEffect(() => {
        const { name, email, message } = msg

        if (name.length > 0 && email.length > 0 && message.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [msg])

    const handleUpdateForm = (e, type) => {
        e.preventDefault()
        const types = ['name', 'email', 'subject', 'message']
        let mssg = msg
        types.forEach(t => {
            if (type === t) {
                mssg = {
                    ...msg,
                    [t]: e.target.value
                }
            }
        })
        console.log(mssg)
        setMsg(mssg)
    }

    return (
        <div className='contact animate--fade-in'>
            <div className='contact__split animate--fade-in'>
                <NrdstrContactIcon />
            </div>
            <div className='contact__container'>
                <h2>get in touch</h2>
                <Socials />
                <p>ready to move forward on your next project? have a question or two? just want to say hi? drop us a message and we'll get back to you <strong>asap</strong>. we are just as available on our socials. feel free to send us a dm any time.</p>
                <form className='contact__form'>
                    <input onChange={e => handleUpdateForm(e, 'name')} type='text' className='contact__input' ref={name} placeholder='name*' />
                    <input onChange={e => handleUpdateForm(e, 'email')} type='email' className='contact__input' ref={email} placeholder='email*' />
                    <input onChange={e => handleUpdateForm(e, 'subject')} type='text' className='contact__input' ref={subject} placeholder='subject' />
                    <textarea onChange={e => handleUpdateForm(e, 'message')} className='contact__textarea' ref={message} placeholder='message*' />
                    <button onClick={handleFormSubmit} disabled={isDisabled} title='submit form' className='contact__submit-btn'>
                        send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
