import './menu.scss'


const Menu=({menuOpen, setMenuOpen})=>{
	
  return (
		<div className={menuOpen? 'menu active' : 'menu'}>
			<ul>
				<li onClick={()=>setMenuOpen(false)}>
					<a href='#intro'>Home</a>
				</li>
				<li onClick={()=>setMenuOpen(false)}>
					<a href='#about'>About Me</a>
				</li>
				<li onClick={()=>setMenuOpen(false)}>
					<a href='#portfolio'>Portfolio</a>
				</li>

				<li onClick={()=>setMenuOpen(false)}>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
  )
}
export default Menu
/*
				<li onClick={()=>setMenuOpen(false)}>
					<a href='#testimonials'>Testimonials</a>
				</li>
*/