import './footer.scss'
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='itemContainer'>
            <GitHub className="icon"/>
            <span>cpesar</span>
      </div>
      
      <div className='itemContainer'>
        <LinkedIn className="icon" />
        <span>chrispesar1@gmail.com</span>
      </div>

    <div className='itemContainer'>
        <Email className="icon" />
        <span>chrispesar1@gmail.com</span>
      </div> 
    </div>
  )
}
