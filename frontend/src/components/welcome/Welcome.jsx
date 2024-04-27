import React from 'react'
import "./Welcome.css"

const Welcome = () => {
	return (
		<section className='wrap'>
			<div className='welcome'>
				<div className='welcome-rect-title'>
					<h3 className='welcome-title'>Welcome to Docster AI</h3>
					<p className='welcome-subtitle'>
						Learn Frameworks with AI
					</p>
				</div>
				<div className='welcome-logo-title'>
					<div className='welcome-logo'>
					</div>
					<span></span>
				</div>
			</div>
			<span className='hor-line'></span>
		</section>
	)
}

export default Welcome