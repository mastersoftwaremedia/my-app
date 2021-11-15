import './portfolio.scss'
import {useState, useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {
	featured,
	contents,
	done
} from '../../data'


const Portfolio=()=>{
	const [selected, setSelected]=useState('featured')
	const [data, setData]=useState([])
	const list=[
		{
      id: "featured",
      title: "Featured",
		},
    {
      id: "contents",
      title: "Contents",
    },
    {
      id: "done",
      title: "What I've done",
    }
	]
	
	useEffect(()=>{
		switch(selected){
			case 'featured':
				setData(featured)
				break;
			case 'contents':
				setData(contents)
				break;
			case 'done':
				setData(done)
				break;
			default:
				setData(featured)
		}
	},[selected])
	
	return(
		<div className='portfolio' id='portfolio'>
			<h1>Portfolio</h1>
			<ul>
			{list.map((item, index)=>(
				<PortfolioList key={index}
					title={item.title}
					id={item.id}
					active={selected === item.id}
					setSelected={setSelected}
				/> 
			))}
			</ul>
			<div className='container'>
			{data.map((d,index)=>(
				<a href={d.href} className='item' key={index}>
	
						<img src={d.img} alt={d.title} />
						<h3>{d.title}</h3>

				</a>
			))}		
			</div>
		</div>
	)
}
export default Portfolio
/*
				<div className='item' key={index}>
					<a href={d.href}>
						<img src={d.img} alt={d.title} />
						<h3>{d.title}</h3>
					</a>
				</div>
*/