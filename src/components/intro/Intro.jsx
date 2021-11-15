import './intro.scss'
import {useEffect, useRef} from 'react'
import {init} from 'ityped'

const Intro=()=>{
	const textRef=useRef()
	
	useEffect(()=>{
		//console.log(textRef)
		init(textRef.current, {
			showCursor:true,
			backDelay:1500,
			backSpeed:50,
			strings:['Developer', 'UI/UX Thinker', 'Content Creator']
		})
	},[])
	
	return(
		<div className='intro' id='intro'>
			<div className='left'>
				<div className='imgContainer'>
					<h1 className="h1Title"><span>HE</span><br />LLO,</h1>
				</div>
			</div>
			<div className='right'>
				<div className='wrapper'>
					<h2>I am a dedicated full-stack web applications developer...</h2>
					<h1>Youn Dev</h1>
					<h3><span ref={textRef}></span></h3>
				</div>
				<a href='#about'>
					<img src='/my-app/assets/down.png' alt='' />
				</a>
			</div>
		</div>
	)
}
export default Intro