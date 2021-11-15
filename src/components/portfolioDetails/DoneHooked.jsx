import './portfolioDone.scss'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const DoneHooked=()=>{
	return(
		<div className='portfolioDone' id='doneHookedSongs'>
			<h1>What I've done: Hooked Songs</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://my-songapp.herokuapp.com/' target="_blank" rel="noreferrer">Enter HookedSongs App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='imgBxContainer'>
					<p>
						This project is just a reminder of MERN stack application using Express for backend. It inherited some of previous projects' functions such as react-bootstrap UI system and applied Context API to control state through out components. I do not know if I can live without react-router.  
					</p>
					<p>
						If the user is loggedIn, user can create new song information or edit it. I added modal functionality on top of the regualar add page in the navbar. This project was recap of using Context API which I wanted to take a deep dive.   
					</p>
					<p>
						The useState hook allows developer to use state in functional components. The useContext hook takes in a context object and returns as any value prop in Context.Provider. The context passes state from a parental component to a child component within the state tree without injecting props until it reached down to the component. The useEffect is equivalent to componentDidMount() method. It can be used as much as needed to, but it should never be abused. If it does, the project would refuse to work properly.   
					</p>
					<p>
						Thank you for reading all my project journals and happing coding!
					</p>
				</div>
			
			</div>
		</div>
	)
} 
export default DoneHooked
/*

*/