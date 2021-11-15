import './about.scss'

const About=()=>{

	return(
		<div className='about' id='about'>
			<h1>About Me</h1>
			<div className='aboutWrapper'>
			<div className='left'>
				<div className='imgContainer'>
					<img src='/my-app/assets/notePic3.jpg' alt='' />
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>I am a dedicated full-stack developer who loves to write clean and better code with the straight to the point approach. It is less distracting and gives me a room to breathe to make elegant web applications.</h2>
					<div className="skills__box">
						<h3 className="skills__subtitle">Development</h3>
            <span>Html</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>Scss</span>
						<span>Node/Express</span>
            <span>React</span>
						<span>Vue</span>
						<span>MongoDB</span>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}
export default About