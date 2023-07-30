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
            <Link to='../about' className="nav-links">About</Link>
            <Link to='../locations' className="nav-links">Location</Link>
            <Link to='../careers' className="nav-links">Careers</Link>
        </div>
        
        </div>
        
        <button className='btn'>Get ScootIn</button>
      </div>    
      
    
  )
}

export default Navbar