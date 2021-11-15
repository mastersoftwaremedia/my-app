import {useState} from 'react'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import FeaturedProshop from './components/portfolioDetails/FeaturedProshop'
import FeaturedBlogSns from './components/portfolioDetails/FeaturedBlogSns'
import FeaturedMovies from './components/portfolioDetails/FeaturedMovies'
import FeaturedHooked from './components/portfolioDetails/FeaturedHooked'
import ContentProshop from './components/portfolioDetails/ContentProshop'
import ContentBlogSns from './components/portfolioDetails/ContentBlogSns'
import ContentMovies from './components/portfolioDetails/ContentMovies'
import ContentHooked from './components/portfolioDetails/ContentHooked'
import DoneProshop from './components/portfolioDetails/DoneProshop'
import DoneBlogSns from './components/portfolioDetails/DoneBlogSns'
import DoneMovies from './components/portfolioDetails/DoneMovies'
import DoneHooked from './components/portfolioDetails/DoneHooked'

import Contact from './components/contact/Contact'
import './app.scss'


const App=()=>{
	const [menuOpen, setMenuOpen]=useState(false)
  return (
		<div className='app'>
			<Header
				menuOpen={menuOpen} 
				setMenuOpen={setMenuOpen} 
			/>
			<Menu 
				menuOpen={menuOpen} 
				setMenuOpen={setMenuOpen} 
			/>
			<div className='sections'>
				<Intro />
				<About />
				<Portfolio />
				<FeaturedProshop />
				<ContentProshop />
				<DoneProshop />
				<FeaturedBlogSns />
				<ContentBlogSns />
				<DoneBlogSns />
				<FeaturedMovies />
				<ContentMovies />
				<DoneMovies />
				<FeaturedHooked />
				<ContentHooked />
				<DoneHooked />
				<Contact />
			</div>
		</div>
  )
}
export default App