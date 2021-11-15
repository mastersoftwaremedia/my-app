import './portfolioFeatured.scss'


const FeaturedMovies=()=>{
	return(
		<div className='portfolioFeatured' id='featuredMovies'>
			<h1>Featured: Movies</h1>
			<div className='box'>
				<div className='btn'>
					<a href='#portfolio'>Go Back</a>
				</div>			

				<div className='imgBxContainer'>
					<img src='/my-app/assets/movies/m-home.png' alt='' />
					<img src='/my-app/assets/movies/m-details.png' alt='' />
					<img src='/my-app/assets/movies/m-popular.png' alt='' />
				</div>
				<div className='imgBxContainer'>
					<img src='/my-app/assets/movies/m-mylist.png' alt='' />
					<img src='/my-app/assets/movies/m-add-searched.png' alt='' />
					<img src='/my-app/assets/movies/m-watched.png' alt='' />
				</div>
										
			</div>
		</div>
	)
} 
export default FeaturedMovies
/*

*/