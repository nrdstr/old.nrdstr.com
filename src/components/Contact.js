import React, { useState, useEffect } from 'react'
import Socials from './Socials'
import { NrdstrContactIcon } from '../icons/icons'

const Contact = () => {
    const [isDisabled, setDisabled] = useState(true)
    const [messageSuccess, setMessageSuccess] = useState(false)
    const [emailIsValidated, setEmailVaildation] = useState(false)

    const initialMsg = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    const [msg, setMsg] = useState(initialMsg)

    const handlePostEmail = async () => {
        const url = `https://api.nrdstr.com/contact-form`
        const post = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msg)
        })

        try {
            const res = await post.json()
            if (res.success) {
                setMessageSuccess(true)
                setMsg(initialMsg)
                setDisabled(true)
                setTimeout(() => {
                    setMessageSuccess(false)
                }, 3000)

            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        handlePostEmail()
    }

    useEffect(() => {
        const { name, email, message } = msg

        if (name.length > 0 && email.length > 0 && message.length > 0 && emailIsValidated) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [msg, messageSuccess, emailIsValidated])

    const handleEmailValidation = () => {
        if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(msg.email)) {
            setEmailVaildation(true)
        } else {
            setEmailVaildation(false)
        }
    }

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
                if (t === 'email') handleEmailValidation()
            }
        })
        setMsg(mssg)
    }

    const pink = `rgb(241, 123, 165)`

    return (
        <div className='contact animate--fade-in'>
            <div className='contact__split'>
                <NrdstrContactIcon success={messageSuccess} />
            </div>
            <div className='contact__container'>
                <div className='contact__info'>
                    <h2>get in touch</h2>
                    <Socials />
                    <p style={{ fontSize: '1.3rem' }}><strong>ready to move forward on your next project?</strong></p>
                    <p>send us a message and we'll get back to you <strong>asap</strong>. you can reach us directly at <a href='mailto:hello@nrdstr.com' className='link'>hello@nrdstr.com</a> or on any our socials. drop a dm any time!</p>
                </div>
                <form className='contact__form' autoComplete="off">
                    <input style={{ border: `3px solid ${msg.name.length > 0 ? 'transparent' : pink}` }} onChange={e => handleUpdateForm(e, 'name')} type='text' className='contact__input' value={msg.name} placeholder='name*' />
                    <input style={{ border: `3px solid ${((msg.email.length > 0) && emailIsValidated) ? 'transparent' : pink}` }} onChange={e => handleUpdateForm(e, 'email')} type='email' className='contact__input' value={msg.email} placeholder='email*' />
                    <input onChange={e => handleUpdateForm(e, 'subject')} type='text' className='contact__input' value={msg.subject} placeholder='subject' />
                    <textarea style={{ border: `3px solid ${msg.message.length > 0 ? 'transparent' : pink}` }} onChange={e => handleUpdateForm(e, 'message')} className='contact__textarea' value={msg.message} placeholder='message*' />
                    <button onClick={handleFormSubmit} disabled={isDisabled} title='submit form' className='contact__submit-btn'>
                        send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
