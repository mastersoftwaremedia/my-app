import './portfolioContent.scss'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter'


const ContentProshop=()=>{
	return(
		<div className='portfolioContent' id='contentProshop'>
			<h1>Content: Proshop</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/proshop/ps-productDetails.png' alt='' />
					<img src='/my-app/assets/proshop/ps-cart.png' alt='' />
				</div>

				<div className='content'>
					<AlignVerticalCenterIcon className='icon' />
					<a href='https://mypro-shop.herokuapp.com/' target="_blank" rel="noreferrer">Enter ProShop App</a>
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
							Managing global state with Redux(Actions & Reducers) and using Redux state in components (useDispatch & useSelector)
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
							Integrated the PayPal Api using environmental variables
						</li>						
					</div>
				
					<div className='box'>
						<li>
							<ControlPointIcon className='liIcon' />
							Full featured shopping cart
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Product search feature with pagination from server-side
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							User profile to edit and  able to track user orders 
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Checkout process with PayPal integration 
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Admin product management 
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Admin user management 
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Admin order management 
						</li>
						<li>
							<ControlPointIcon className='liIcon' />
							Able to mark orders as delivered status on admin order managment side 
						</li>
					</div>
					</ul>
				</div>				
			</div>
		</div>
	)
} 
export default ContentProshop
/*

*/