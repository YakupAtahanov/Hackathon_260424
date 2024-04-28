import React from 'react'
import yakup from "../../assets/Yakup.png"
import aga from "../../assets/Aga.jpg"
import meshhur from "../../assets/Meshhur.png"
import { Link } from 'react-router-dom'
import "./Team.css"

const Team = () => {
    return (
        <section className='team'>
            <div className='team-btn'>
                <span className='hor-line' />
                <button className='request-button'>Meet the team</button>
            </div>
            <div className='team-profile'>
                <div className='team-devs'>
                    <img className='prof-img' src={yakup}/>
                    <h4 className='team-name'>Yakup Atahanov</h4>
                    <Link to="https://www.linkedin.com/in/yakup-atahanov/" target='_blank'>https://www.linkedin.com/in/yakup-atahanov/</Link>
                    <h4 className='role'>UI/UX</h4>
                </div>
                <div className='team-devs'>
                    <img src={aga} className='prof-img' />
                    <h4 className='team-name'>Agageldi Artykov</h4>
                    <Link to="https://www.linkedin.com/in/sequery/" target='_blank'>https://www.linkedin.com/in/sequery/</Link>
                    <h4 className='role'>Backend, security</h4>
                </div>
                <div className='team-devs'>
                    <img src={meshhur} className='prof-img' />
                    <h4 className='team-name'>Meshhur Atageldiyev</h4>
                    <Link to="https://www.linkedin.com/in/sequery/" target='_blank'>https://www.linkedin.com/in/sequery/</Link>
                    <h4 className='role'>Frontend</h4>
                </div>
            </div>
        </section>
  )
}

export default Team