import './portfolioContent.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const ContentMovies=()=>{
	return(
		<div className='portfolioContent' id='contentMovies'>
			<h1>Content: Movies</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/movies/m-home.png' alt='' />
					<img src='/my-app/assets/movies/m-popular.png' alt='' />
				</div>

				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://moviewatchapp.herokuapp.com/' target="_blank" rel="noreferrer">Enter Movies App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='content'>
					<AcUnitIcon className='icon' /><h3>This project is about movie site using an external movie API. It was developed using React Hooks, Context API and localStorage to store data</h3><AcUnitIcon className='icon' />
				</div>

				<div className='content'>
					<ul>
					<div className='box'>
						<li>
							<ControlPointIcon className='liIcon' />
							React with Functional Components and Hooks
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Managing states with React Hook Context API
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Storing data in localStorage and fetching data from an external API
						</li>						
					</div>
				
					</ul>
				</div>				
			</div>
		</div>
	)
} 
export default ContentMovies
/*

*/