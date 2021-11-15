import './portfolioContent.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const ContentBlogSns=()=>{
	return(
		<div className='portfolioContent' id='contentBlogSns'>
			<h1>Content: BlogSns</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/blogSns/3bs-loggedIn.png' alt='' />
					<img src='/my-app/assets/blogSns/bs-allUsers.png' alt='' />
				</div>

				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://blogsnsapp.herokuapp.com/page/1' target="_blank" rel="noreferrer">Enter BlogSns App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='content'>
					<AcUnitIcon className='icon' /><h3>Building a light mini flexible and scalable social network blog from scratch with the following modules and functionality</h3><AcUnitIcon className='icon' />
				</div>

				<div className='content'>
					<ul>
					<div className='box'>
						<li>
							<ControlPointIcon className='liIcon' />
							Blog post like/unlike as well as follow/unfollow another users
						</li>				
						<li>
							<ControlPointIcon className='liIcon' />
							Cloudinary API to upload images throughout the project
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							CRUD on users/posts and password forgot/reset functionality
						</li>
					</div>
				
					<div className='box'>
						<li>
							<ControlPointIcon className='liIcon' />
							React with Functional Components and Hooks and inherited many functionalities from ProShop App
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Managing state with Context API using Postman
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Created backend with Express and MongoDB database
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							JWT authentication (JSON web tokens) and created custom authentication middleware
						</li>	
					</div>
					</ul>
				</div>				
			</div>
		</div>
	)
} 
export default ContentBlogSns