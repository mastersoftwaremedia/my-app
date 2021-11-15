import './portfolioDone.scss'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const DoneMovies=()=>{
	return(
		<div className='portfolioDone' id='doneMovies'>
			<h1>What I've done: Movies</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://moviewatchapp.herokuapp.com/' target="_blank" rel="noreferrer">Enter Movies App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='imgBxContainer'>
					<p>
						Since I developed MERN stack apps using server-side twice in a row, I wanted to use an external movie API to utilize the database that they provide. Since I really liked using Context API, I just decided to use it with this project development. 
					</p>
					<p>
						This time I left out the JWT token for authorization and authentication.I used localStorage to store database information locally so the components can access database easily.     
					</p>
					<p>
						I wanted the project to have top movie page as well as popular movie page. The movie API had enough information to display such as title, released year, director and actors and ratings.
					</p>
					<p>
						Also I wanted to add useful functions that I learned before on this project. The user can search movie and add it onto the my movie list to save it to watch it later. Once the user is done watching the movie, it can be transferred to watched page to keep it as a record or the user can delete it as well.
					</p>
				</div>
			
			</div>
		</div>
	)
} 
export default DoneMovies
/*

*/