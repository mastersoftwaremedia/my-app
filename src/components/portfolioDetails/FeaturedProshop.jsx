import './portfolioFeatured.scss'



const FeaturedProshop=()=>{
	return(
		<div className='portfolioFeatured' id='featuredProshop'>
			<h1>Featured: Proshop</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>			

				<div className='imgBxContainer'>
					<img src='/my-app/assets/proshop/ps-navmenu.png' alt='' />
					<img src='/my-app/assets/proshop/ps-productDetails.png' alt='' />
					<img src='/my-app/assets/proshop/ps-cart.png' alt='' />
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/proshop/ps-placeorder.png' alt='' />
					<img src='/my-app/assets/proshop/ps-order.png' alt='' />
					<img src='/my-app/assets/proshop/ps-admin-orderlist.png' alt='' />
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/proshop/ps-shipping.png' alt='' />
					<img src='/my-app/assets/proshop/ps-admin-productlist.png' alt='' />
					<img src='/my-app/assets/proshop/ps-admin-userlist.png' alt='' />
				</div>
										
			</div>
		</div>
	)
} 
export default FeaturedProshop
/*

*/