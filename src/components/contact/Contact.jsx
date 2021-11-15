import './contact.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import {Mail} from '@material-ui/icons'
import {useRef, useState} from 'react'
import emailjs from 'emailjs-com'



const Contact=()=>{
	const formRef=useRef()
	const [done, setDone]=useState(false)
	const SERVICE_ID=process.env.REACT_APP_SERVICE_ID
	const TEMPLATE_ID=process.env.REACT_APP_TEMPLATE_ID
	const USER_ID=process.env.REACT_APP_USER_ID
	
	const handleSubmit=e=>{
		e.preventDefault()
		emailjs.sendForm(
			SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      USER_ID
		)
		.then(
			(result) => {
				console.log(result.text);
        setDone(true)
				console.log(done)
      },
      (error) => {
        console.log(error.text);
      }		
		)
	}
	
	return(
		<div className='contact' id='contact'>
			<h1>Contact</h1>
			<div className='contactWrapper'>
				<div className='left'>
					<div className="c-info">
            
						<div className="c-info-item">
							<LocalPhoneIcon className='icon' />
							<span>917. 715. 6509</span>
            </div>
            <div className="c-info-item">
							<Mail className='icon' />
							<span>codingprofessional06@gmail.com</span>
            </div>

					</div>
				</div>
				<div className='right'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
				</div>
			</div>
		</div>
	)
} 
export default Contact