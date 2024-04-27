import React from 'react'
import "./HomePage.css"
import { Container } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import Welcome from '../../components/welcome/Welcome'
import About from '../../components/about/About'

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Welcome />
      <About />
    </Container>
  )
}

export default HomePage