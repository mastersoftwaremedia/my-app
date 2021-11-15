import './portfolioDone.scss'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const DoneProshop=()=>{
	return(
		<div className='portfolioDone' id='doneProshop'>
			<h1>What I've done: Proshop</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://mypro-shop.herokuapp.com/' target="_blank" rel="noreferrer">Enter ProShop App</a>
					<AlignVerticalCenterIcon className='iconRight' />
				</div>

				<div className='imgBxContainer'>
					<p>
						Before I started building this fully functional e-commerce Proshop App, I had my own ups and downs learning experience with React and Express. I would say building this particular project led me to massive growth in my coding skills.</p>
					<p>
						This project has been developed using react and redux with express for backend. It is designed to be responsive to various size of mobile devices by using react-bootstrap UI. 
					</p>
					<p>
						Instead of using traditional React class component, I used functional component with hooks integrated with Redux state. It was not that hard to implement it, all thanks to Hook API such as useSelector(), useDispatch(), useState(), useEffect() and all other essential methods. Hook API eliminates the need for a wrapper which helped me to better manage global state with Redux instead of injecting props into components.  
					</p>
					<p>
						Creating this project needed at least 5 steps to finish. First two steps needed for client-side and third step for Checkout Process and the last 2 steps for admin-side. Starting the homescreen part gave me a better understanding with project direction. 
					</p>
					<p>
						I wanted the project to display regular paginated product pages as well as paginated searched product results pages. React-router-dom made all these possible by using query params. I also used cloudinary api to upload product images to make better user experience to bring more customers.</p>
					<p>
						The product detailed page contains all information about the product as well as a buy button for a user to purchase the specific product. At this stage, I made navbar to display the number of all items in the shopping cart, so the customers are aware of their buying situations. 
					</p>
					<p>
						The process of shopping cart stage contained selected quantity to be either added or removed at customer convenience and calculates the total prices and then the backend will process the information in order to work with PayPal. The project made sure to work with the implemented JWT token to authorize and authenticate the user for securely protected routes. If the user is not logged in, it made sure the user does to continue shopping and proceed to checkout.     
					</p>
					<p>
						Once the user finishes with checkout, the user can go to my order page to see all ordered items with total prices along with delivered status by clicking My Orders button in the navbar section along with user profile button. The user can also modify user profile information including profile pictures as well as password.   
					</p>
					<p>
						And last but not least, the admin board to manage all contained valuable information in order to keep products and users information safe and secure. 
					</p>
				</div>
			
			</div>
		</div>
	)
} 
export default DoneProshop
/*

*/