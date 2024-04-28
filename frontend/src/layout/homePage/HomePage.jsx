import React from 'react'
import "./HomePage.css"
import { Container } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import Welcome from '../../components/welcome/Welcome'
import About from '../../components/about/About'
import Request from '../../components/request/Request'
import Team from '../../components/team/Team'

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Welcome />
      <About />
      <Request />
      <Team />
    </Container>
  )
}

export default HomePage