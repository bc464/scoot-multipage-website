import React , {useState}from 'react'
import { Link} from 'react-router-dom'


import "../Navbar/Navbar.css"

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  

  return (
  
      <div className='nav-content'>
        <div className='nav-content__left'>
        <Link to='../'><img src='./assets/logo.svg' alt='logo' ></img></Link>
        
        <div >
            <Link to='/scoot-multipage-website/about' className="nav-links">About</Link>
            <Link to='/scoot-multipage-website/locations' className="nav-links">Location</Link>
            <Link to='/scoot-multipage-website/careers' className="nav-links">Careers</Link>
        </div>
        
        </div>
        
        <button className='btn'>Get ScootIn</button>
      </div>    
      
    
  )
}

export default Navbar