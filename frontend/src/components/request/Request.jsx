import React, { useEffect } from 'react'
import "./Request.css"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getMethods } from '../../http/methodsAPI.js'

const Request = () => {
    const navigate = useNavigate()

    const toDemo = () => {
        navigate("/usedemo")
    }

    return (
        <section className='try'>
            <div className='try-out'>
                <span className='hor-line' />
                <Button className='try-btn' variant='outline-light' onClick={toDemo}>Try it out</Button>
            </div>
            <div className='try-form'>
                <input className='try-input' />
                <button className='request-button'>Send</button>
            </div>
        </section>
    )
}

export default Request