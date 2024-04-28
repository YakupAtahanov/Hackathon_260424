import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Container } from 'react-bootstrap'
import FrameworkSearch from '../../components/framework_search/FrameworkSearch'
import SearchContent from '../../components/searchContent/SearchContent'
import './UseDemo.css'

const UseDemo = () => {
  return (
    <div className='bodybackground'>
      <Container>
          <Navbar></Navbar>
          <FrameworkSearch></FrameworkSearch>
          <SearchContent></SearchContent>
      </Container>
    </div>
  )
}

export default UseDemo