import React from 'react'
import './FrameworkSection.css'

const FrameworkSection = (props) => {
  return (
    <div className={`framework-section-container ${props.className}`}>
        {props.children}
    </div>
  )
}

export default FrameworkSection