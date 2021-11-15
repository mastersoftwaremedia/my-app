import './portfolioDone.scss'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const DoneBlogSns=()=>{
	return(
		<div className='portfolioDone' id='doneBlogSns'>
			<h1>What I've done: BlogSns</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://blogsnsapp.herokuapp.com/page/1' target="_blank" rel="noreferrer">Enter BlogSns App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='imgBxContainer'>
					<p>
						After finishing with E-Commerce ProShop App, I wanted to challenge myself to develop a mini version of social media application within a blog. I thought it would be fun to create another MERN stack app except this time, I develop it with React Hooks, Context API, functional react components and Node REST API. I used react-bootstrap UI for css styles and it helped me alot.    
					</p>
					<p>
						I always start with routing to link components in App component. At that stage, I added AuthContext to control user state properly. It is easier than using Redux since I always use Redux-thunk middleware for managing global states.
					</p>
					<p>
						Since this project is about interacting with other bloggers while user blog as well, I needed users and posting models to start this project.
					</p>
					<p>
						This time, I skipped admin-side since I already had done with Proshop and just focused on client-side. I added the ForgotPassword and ResetPassword functionalities just to make it as a real-project application. I used SendGrid API for emailing client for this particular functionality.  
					</p>
					<p>
						The main point of this project is about liking/unliking a post and following/unfollowing other users of this social blogging application. What is good about using Context API is that it eliminates all unnecessary processes and keep the code clean which made me to easily focus and understand what I need to do for the next step.
					</p>
					<p>
						If the loggedIn user wants to checkout the user profile, it would automatically goes to the user profile page rather than go through user detailed page as other users. This step was done easily by using locally stored user infomation through Context API. With Redux, it has to go extra miles to get this done. However, Context API is not the solution to all situations. A complex project may require more higher level of handling the data set.    					
					</p>
					<p>
						For follow/unfollow functions, the server-side needs a loggedIn userId as well as the other userId which the loggedIn user wants to follow or unfollow. For this situation, I had to pass the loggedIn userId through req.body and the other userId through req.params.
					</p>
					<p>
						For like/unlike functions, the server-side needs a loggedIn userId and the particular post information, so the likeHandler can find the postId to push or pull the userId into post like array.
					</p>
				</div>
			
			</div>
		</div>
	)
} 
export default DoneBlogSns
/*

*/