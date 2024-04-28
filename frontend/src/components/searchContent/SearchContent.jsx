import React from 'react'
import './SearchContent.css'
import FrameworkSection from '../frameworkSection/FrameworkSection'

const SearchContent = () => {
  return (
    <div className='search-content-container'>
        <div className='content-nav-btns'>
            <FrameworkSection className="first-section description">Description</FrameworkSection>
            <FrameworkSection className="methods">Methods</FrameworkSection>
            <FrameworkSection className="classes">Classes</FrameworkSection>
            <FrameworkSection className="variables">Variables</FrameworkSection>
            <FrameworkSection className="last-section"></FrameworkSection>
        </div>
        <div className='search-content'></div>
    </div>
  )
}

export default SearchContent