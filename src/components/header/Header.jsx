import './header.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import {Mail} from '@material-ui/icons'

const Header=({menuOpen, setMenuOpen})=>{
	return(
		<div className={menuOpen? 'navbar active' : 'navbar'}>
			<div className='wrapper'>
				<div className='left'>
				
					<a href='#intro' className='logo'>
						<i className='fab fa-react'></i>My Portfolio
					</a>

					<div className='itemContainer'>
						<LocalPhoneIcon className='icon' />
						<span>917. 715. 6509</span>
					</div>
					<div className='itemContainer'>
						<Mail className='icon' />
						<span>codingprofessional06@gmail.com</span>
					</div>					
					
				</div>
				
				<div className='right'>
							
					<div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
		
				
			</div>
		</div>
	)
}
export default Header