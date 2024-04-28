import React from 'react'
import "./Request.css"
import { Button } from 'react-bootstrap'

const Request = () => {
    return (
        <section className='try'>
            <div className='try-out'>
                <span className='hor-line'/>
                <Button className='try-btn' variant='outline-light'>Try it out</Button>
            </div>
            <div className='try-form'>
                <input className='try-input'/>
                <button className='request-button'>Send</button>
            </div>
        </section>
    )
}

export default Request