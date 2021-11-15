import './portfolioContent.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const ContentHooked=()=>{
	return(
		<div className='portfolioContent' id='contentHookedSongs'>
			<h1>Content: Hooked Songs</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/hookedSongs/4hs-songsDetails.png' alt='' />
					<img src='/my-app/assets/hookedSongs/5hs-loggedIn.png' alt='' />
				</div>

				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://my-songapp.herokuapp.com/' target="_blank" rel="noreferrer">Enter HookedSongs App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='content'>
					<AcUnitIcon className='icon' /><h3>Instead of using prebuilt plugins or integrating other libraries, I learned and built a completely customized e-commerce shopping cart application from scratch with the following modules and functionality</h3><AcUnitIcon className='icon' />
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
							Created backend with Express and MongoDB database
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							JWT authentication (JSON web tokens) and created custom authentication middleware
						</li>				
						<li>
							<ControlPointIcon className='liIcon' />
							Cloudinary API to upload images throughout the project
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							CRUD on users/songs
						</li>
					</div>
				
					</ul>
				</div>				
			</div>
		</div>
	)
} 
export default ContentHooked
/*

*/